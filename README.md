Lighting Node Pro
=================

I generally find LEDs distracting, but do find their use in signalling information such as various device temperatures.


I reversed the protocol of the Corsair LL fan LEDs+Lighting Node Pro controller because I wanted there to be some Linux
support and found there was none.


I used wireshark in Windows, turned all fans off, started recording, and then set static R, G, and B values with varying
fan counts to figure out how it all worked.


## How to use this as an end-user

Please note this ONLY works with Lighting Node Pro controllers with Corsair LL fans. Other fans can be added but I just
haven't dug too deeply as I only have these ones.


1) Make sure your udev rules allow you acces to USB devices.

2) you MUST provide fan count

3) Choose a color or animation, animations are in animations.js if you're curious how they work

4) You must leave it running (run with & at the end if you want it to go to background)


#### Sets all 3 fans to be red

```shell
node index.js --fan-count=3 --colors red
````

#### Sets fans to red, white and blue

```shell
node index.js --fan-count=3 --colors red,white,blue
````


#### Tracer Animation

colors are two colors to use for ring and rotating LED

```shell
node index.js --fan-count=3 --animation Tracer -p "colors=blue,black"
```

#### I want it to go faster! (-r is framerate)

This uses -r for frame rate of 10 per second

```shell
node index.js --fan-count=3 --animation Tracer -p "colors=red,white" -r 10
```

#### I want different frame rates for all the different fans

Ok I think that's a bit much to ask, but here it is.

```shell
node index.js --fan-count=3 --animation Tracer -p "colors=red,black&fps=16,32,48"
```

#### Silly 3 fan animation example

```shell
node index.js --fan-count=3 --animation RedBlueCollision
```


If anything ever freezes, just control+c, if it still is frozen, hitting it again will force exit, should work fine the
next run. You can use the -x flag to force a USB reset.


-d flag prints the bytes as they're sent down the USB bus.


-s <address> -b <bus> allows you to specify which device if you have multiple.


## Concepts specific to this implementation

The Corsair LL fans have 16 LEDs, and it just takes simple commands to set the values of those LEDs. The effects you see
in Windows are all implemented in software (there's one exception and that's the default rainbow wave which it falls back to if there's no new input).

If the LED configuration is the exact same each run, you can simply send {33}{ff} to "maintain" what was last displayed on the fan LEDs.

So to build animations, we need to have an event stack, and a frame rate. If the frame rate is 1 (1 per second), every second,
a frame will be popped off the event stack, and that's what will be sent during subsequent "set colors" requests. When the set
is exhausted, it starts back over.


## Reversing information 


All packets are null padded to 64 bytes


#### PREAMBLE/INIT

Sent at start when getting into the set color mode

{37}

# If num fans is 0 here, it disables all LEDs, important to do if you don't want it to fall back to rainbow after exiting
{35}{00}{00}{<(short)num fans>0}{00}{01}{01}
{3b}{00}{01}
{38}{00}{02}
{34}
{37}{01}
{34}{01}
{38}{01}{01}
{33}{ff}


#### Color Request

3 requests per, 1 for each color channel

{32}{00}{00}{32}{00}
                 ^ Color channel (R=0x00, G=0x01, B=0x02)

16 bytes per fan, if you had one fan, it would be

{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}{ff}



This is for the first 3 fans, If there's 4 fans, only 2 bytes of the 4th fan is done on the first request, after doing
all color channels, it does an extension run, that looks like:

{32}{00}{32}{2e} 14 bytes remaining for 4th fan, 16 bytes for 5th fan, 16 bytes for 6th fan.


Why 16 bytes? There's 16 different LEDs. 4 on the inside, and 12 on the outside. Since there's 12, I find it easiest
to refer to the positions as positions on a 12-hour clock.


While facing intake (with corsair sticker logo facing you)

1st  - top inner
2nd  - inner left
3rd  - inner bottom
4th  - inner right

5th  - 10 O'Clock
6th  - 9  O'Clock
7th  - 8  O'Clock
8th  - 7  O'Clock
9th  - 6  O'Clock

10th - 5  O'Clock 
11th - 4  O'Clock
12th - 3  O'Clock
13th - 2  O'Clock
14th - 1  O'Clock

15th - 12 O'Clock
16th - 11 O'Clock




