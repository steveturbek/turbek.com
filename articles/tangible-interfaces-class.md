---
title: Tangible Interfaces Class Overview
layout: default
---

# Tangible Interfaces Class

Steve Turbek, Pratt Institute, 2025

_What’s your favorite instance of haptic nostalgia—the poignant memory of the physicality of an obsolete thing—like dialing a rotary phone, shifting gears in a manual transmission, opening a soda can with a pull ring?_ [Erin McKean (@emckean.bsky.social)](https://bsky.app/profile/emckean.bsky.social/post/3lfjeep3w4k22)

# Overview

These are the materials for the Tangible Interfaces Class, created by Steve Turbek at Pratt Institute.

”Software is eating the world” [claimed Marc Andreessen in 2011](https://www.wsj.com/articles/SB10001424053111903480904576512250915629460). Its all-consuming hunger is ravaging the product design landscape. Many consumer products, from camera to Walkman to in-car controls are now simply apps on a featureless glass oblong. This leads to bland product design and customer dissatisfaction. In car design, this has even become a safety concern. “Physical buttons are increasingly rare in modern cars The driver in the worst-performing car control system needs four times longer to perform simple tasks than in the best-performing” [link](https://www.vibilagare.se/english/physical-buttons-outperform-touchscreens-new-cars-test-finds)

An era where “everything is an app and all apps look the same” is also an opportunity for industrial designers to create innovative new products. In Tangible Interfaces, the student is invited to think beyond the screen and design for touch, hearing, and the [dozens of other senses](https://en.wikipedia.org/wiki/Sense) that people have.

The class focuses on designing tactile and sensory experiences for consumer and industrial products with extensive use of 3D modeling and printing. It will introduce basic electronics using the BBC Microbit, a simple microcontroller with a rich sensor package and excellent introductory software. We will also explore the theory and practice of User Experience Design. No previous experience of UX or electronics is expected.

# Tangible Car Design

- [https://www.theturnsignalblog.com/the-subtle-art-of-designing-physical-control-for-cars/](https://www.theturnsignalblog.com/the-subtle-art-of-designing-physical-control-for-cars/)
- [https://www.nngroup.com/articles/tesla-big-touchscreen/](https://www.nngroup.com/articles/tesla-big-touchscreen/)
- [https://www.fastcompany.com/90356020/3-reasons-why-teslas-dashboard-touch-screens-suck](https://www.fastcompany.com/90356020/3-reasons-why-teslas-dashboard-touch-screens-suck)
- [https://www.bloomberg.com/news/features/2023-02-13/are-car-touch-screens-getting-out-of-control](https://www.bloomberg.com/news/features/2023-02-13/are-car-touch-screens-getting-out-of-control)
- [https://www.carscoops.com/2024/11/button-expert-explains-why-touchscreens-didnt-actually-kill-physical-controls/](https://www.carscoops.com/2024/11/button-expert-explains-why-touchscreens-didnt-actually-kill-physical-controls/)
- [Touchscreens Are Out, and Tactile Controls Are Back](https://spectrum.ieee.org/touchscreens)
- https://www.themanual.com/auto/touchscreen-in-car-less-safe-than-buttons/
- [https://www.lifewire.com/car-touchscreens-safety-ratings-8605508](https://www.lifewire.com/car-touchscreens-safety-ratings-8605508)
- [https://www.kiplinger.com/personal-finance/car-touchscreens-unsafe-why-do-we-have-them](https://www.kiplinger.com/personal-finance/car-touchscreens-unsafe-why-do-we-have-them)
- https://www.edmunds.com/car-news/2024-tesla-model-3-turn-signals-long-term-update.html
- https://www.autocar.co.uk/car-news/technology/analysis-are-touchscreens-good-thing
- [https://www.motortrend.com/news/new-car-interior-touchscreen-euro-ncap-safety-testing](https://www.motortrend.com/news/new-car-interior-touchscreen-euro-ncap-safety-testing)
- [https://www.drive.com.au/news/former-apple-design-boss-physical-buttons-return-to-car-interiors/](https://www.drive.com.au/news/former-apple-design-boss-physical-buttons-return-to-car-interiors/)
- [https://www.vibilagare.se/english/physical-buttons-outperform-touchscreens-new-cars-test-finds](https://www.vibilagare.se/english/physical-buttons-outperform-touchscreens-new-cars-test-finds)

## Key Themes Across These Articles

- Safety concerns are paramount: Research consistently shows touchscreens require visual attention, taking eyes off the road for dangerous periods.
- Economic factors drive touchscreen adoption: Automakers find touchscreens cheaper to manufacture and update than physical components.
- Regulatory intervention is emerging: Safety authorities like Euro NCAP are beginning to require physical controls for critical functions.
- The Tesla effect: Tesla pioneered large touchscreens in cars with the 2012 Model S, setting a trend that other manufacturers followed.
- Consumer experience issues: After initial enthusiasm, many drivers find touchscreens frustrating to use in real-world driving conditions.
- A hybrid approach is developing: The industry appears to be moving toward combining physical controls for essential functions with touchscreens for secondary features.
- Voice control as a potential solution: Some experts suggest voice interfaces might eventually reduce reliance on both touchscreens and physical buttons.
- Haptic feedback limitations: The fundamental issue with touchscreens remains their lack of tactile feedback, requiring visual confirmation.

## "Looks like" and a "Works like" prototypes

When designing modern products, Designers and Engineers often make a "looks like" and a "works like" prototype. They are often quite different until late in the engineering process. The goal of 'works like' prototypes is to quickly change and learn. Form follows function, but often you don’t know what the function looks like\! Example of a “works like” prototype: the original iphone [https://web.archive.org/web/20190501154547/https://www.theverge.com/2019/3/19/18263844/apple-iphone-prototype-m68-original-development-board-red](https://web.archive.org/web/20190501154547/https://www.theverge.com/2019/3/19/18263844/apple-iphone-prototype-m68-original-development-board-red)

Students often get tripped up making the "looks like" and a "works like" prototype the same object. We avoid this in our class\!

#

# Microbit

The microbit is a small computer and circuit board,

### Materials to get

- [BBC Microbit Starter Kit](https://www.amazon.com/dp/B07KG2M7BM)
- [Sensor Kit](https://www.amazon.com/KEYESTUDIO-Sensors-Microbit-Breakout-Tutorials/dp/B08H8C6TW5) (can share with 3-6 students)
- [USB-A to USB-C adapter](https://www.amazon.com/Basesailor-Thunderbolt-Converter-Generation-Microsoft/dp/B09SZ5NHF4/) (for newer computers)

### Microbit Documentation

- [https://makecode.microbit.org/\#editor](https://makecode.microbit.org/#editor) this is how you program the Microbit
- [https://docs.keyestudio.com/projects/KS0306/en/latest/](https://docs.keyestudio.com/projects/KS0306/en/latest/)
- [https://docs.keyestudio.com/projects/KS4009-KS4010/en/latest/](https://docs.keyestudio.com/projects/KS4009-KS4010/en/latest/)
- [https://wiki.keyestudio.com/KS4009(4010)\_45_in_1_Sensor_Starter_Kit_For_BBC_Micro:bit](<https://wiki.keyestudio.com/KS4009(4010)_45_in_1_Sensor_Starter_Kit_For_BBC_Micro:bit>)

### Introduction to Microbit

- [https://microbit.org/get-started/getting-started/introduction/](https://microbit.org/get-started/getting-started/introduction/)
- [https://microbit.org/teach/lessons/](https://microbit.org/teach/lessons/)
- [https://microbit.org/teach/lessons/data-handling-sensor-design/](https://microbit.org/teach/lessons/data-handling-sensor-design/)
- [https://www.youtube.com/results?search_query=microbit](https://www.youtube.com/results?search_query=microbit)
- [https://www.reddit.com/r/microbit/](https://www.reddit.com/r/microbit/)
- [https://stackoverflow.com/questions/tagged/bbc-microbit](https://stackoverflow.com/questions/tagged/bbc-microbit)

### Microbit Class code samples

- [Compass](https://makecode.microbit.org/S73740-73796-06271-95761)
- [Accelerometer (angle sensor)](https://makecode.microbit.org/S35143-81264-77800-96699)
- [Sonar](https://makecode.microbit.org/S45031-64324-54424-03888)
- [Analog-data-smoothing](https://makecode.microbit.org/S61055-28532-56631-56450)
- [Rotary encoder](https://makecode.microbit.org/S64071-13319-65768-28069)
- [Servo simple](https://makecode.microbit.org/S21494-23982-18118-18659)
- [Servo sonar with smoothing](https://makecode.microbit.org/S24125-16117-53200-02888)
- [Flappy pixel](https://makecode.microbit.org/S38662-17419-00388-04398)
- [Flappy Servo](https://makecode.microbit.org/S88818-34957-38430-63386)

### Tech Tips Triage for Microbit (in process)

- Make sure to check 5v vs 3v. Some, many sensors need more volts or amps. Sometimes a battery pack just makes it work\!
- Make a firm base to attach things to\!
- Tape down wires \- often loose wires are the problem\!
- Put the Battery pack in the lower connector on T plug
- LED enable code command interferes with pins
- Which pins are safe? 0,1,2
- Watch out for multiple forever loops
- Keep your main program loop fast, with no delays.

## Readings

### Books

- Game
  - [https://archive.org/details/game-feel](https://archive.org/details/game-feel)
- UX Design
  - [The Design of Everyday Things](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things) \- Classic book on design
  - [https://sensible.com/dont-make-me-think/](https://sensible.com/dont-make-me-think/)
  - [https://rosenfeldmedia.com/books/lean-user-research/](https://rosenfeldmedia.com/books/lean-user-research/)
  - [https://rosenfeldmedia.com/books/web-form-design/](https://rosenfeldmedia.com/books/web-form-design/)
- Tangible User Interfaces: Past, Present and Future Directions 2010 book (not especially recommended, but same name as course)

### Essays, Articles

- [https://notbor.ing/words/the-most-satisfying-checkbox](https://notbor.ing/words/the-most-satisfying-checkbox)
- [https://www.uxmatters.com/mt/archives/2017/03/3-kinds-of-simplicity.php](https://www.uxmatters.com/mt/archives/2017/03/3-kinds-of-simplicity.php)
- [https://turbek.com/articles/2012/usability-of-coffee.html](https://turbek.com/articles/2012/usability-of-coffee.html)
- [ACM International Conference on Tangible, Embedded and Embodied Interaction](https://tei.acm.org/2025/about/about)

### Tangible Design Inspiration

- [The timeless appeal of Olivetti's industrial and minimalist design style](https://abduzeedo.com/timeless-appeal-olivettis-industrial-and-minimalist-design-style#google_vignette)
- [https://www.domusweb.it/en/design/2022/07/06/quando-il-design-italiano-era-una-cosa-da-fantascienza.html](https://www.domusweb.it/en/design/2022/07/06/quando-il-design-italiano-era-una-cosa-da-fantascienza.html)
- [https://www.yankodesign.com/2024/12/04/modular-numpad-concept-adds-some-teenage-engineering-industrial-aesthetic-to-your-workflow/](https://www.yankodesign.com/2024/12/04/modular-numpad-concept-adds-some-teenage-engineering-industrial-aesthetic-to-your-workflow/)
- [You spin me right round, baby, right round.](https://www.theverge.com/news/622914/auto-draft)
- “Knob Feel” A dude who rated stereo knobs
  - [Arcam \- AVR21 \- AV Receiver \- Knob Feel Review](https://www.youtube.com/watch?v=5I2J7BAcQro)
  - [Onkyo TX-NR616 Knob Feel Review](https://www.youtube.com/watch?v=hnloAUVLAho)
  - [Knob Feel Showcase - Xeeltech Hapticore - CUSTOM KNOB FEELS](https://www.youtube.com/watch?v=grDQHYVJJGY)
  - [2015 Knob Feel Awards](https://www.youtube.com/watch?v=HN49Vls-UlM)
- [https://web.archive.org/web/20181130052011/https://www.theverge.com/circuitbreaker/2018/11/21/18105423/ipod-click-wheel-button-music-control-hardware-design](https://web.archive.org/web/20181130052011/https://www.theverge.com/circuitbreaker/2018/11/21/18105423/ipod-click-wheel-button-music-control-hardware-design)
- [Inside the original iPod](http://reddit.com/r/ipod/comments/vvu3po/replacing_the_ball_bearing_on_the_1g/) scroll wheel

### Tangible Tech Inspiration

- This shows genius level work: How did the PONG game get made before software existed? [https://www.falstad.com/pong/index.html](https://www.falstad.com/pong/index.html)
- How the 80's Nintendo Duck Hunt light gun worked [How the Nintendo Zapper worked in Slow Motion - The Slow Mo Guys](https://www.youtube.com/watch?v=V6XnSvB34y8)
- [scottbez1/smartknob: Haptic input knob with software-defined endstops and virtual detents](https://github.com/scottbez1/smartknob)
- [Detent Polymagnet pair \- 12 position (30 degree) \- \#6 CTSK \- 1" D-shape](https://www.polymagnet.com/products/detent-polymagnet-pair-12-position-30-degree-6-ctsk-1-d-shape)
- [MaTouch ESP32-S3 RotaryIPS-Display1.28" GC9A01](https://www.makerfabs.com/matouch-esp32-s3-rotaryips-display1-28-gc9a01.html)
- [T-Encoder Pro \[US\]](https://lilygo.cc/products/t-encoder-pro-us)
- [https://lovemyswitches.com/knobs/](https://lovemyswitches.com/knobs/)
- [https://github.com/UrbanCircles/igor](https://github.com/UrbanCircles/igor)
  - [https://www.makerfabs.com/matouch-smartknob-assembled.html](https://www.makerfabs.com/matouch-smartknob-assembled.html)
- [https://hackaday.com/2021/12/11/getting-familiar-with-round-displays/](https://hackaday.com/2021/12/11/getting-familiar-with-round-displays/)
- [https://www.youtube.com/watch?v=nZa-Vqu-\_fU](https://www.youtube.com/watch?v=nZa-Vqu-_fU)
  - [https://github.com/sb-ocr/focus-dial](https://github.com/sb-ocr/focus-dial)
  - [https://www.instructables.com/Focus-Dial-a-Digital-Distraction-Blocker/](https://www.instructables.com/Focus-Dial-a-Digital-Distraction-Blocker/)
- [Ring Rotary Encoder https://www.digikey.ca/en/products/detail/bourns-inc/PER561-P115-N0015/13999552](https://www.digikey.ca/en/products/detail/bourns-inc/PER561-P115-N0015/13999552)
- [https://www.ptreeusa.com/ttrack_knobs_bolts.html](https://www.ptreeusa.com/ttrack_knobs_bolts.html)
- [Unusual Round Displays and How to Use Them](https://youtube.com/watch?v=FUU0CAjp1OQ&si=UcEB3_FKxkY1a_-c)
- [ANO Directional Navigation and Scroll Wheel Rotary Encoder](https://www.adafruit.com/product/5001)
- [AnySkin: Plug-and-play Skin Sensing for Robotic Touch](https://any-skin.github.io/)

## Fidget Toys

- [https://www.printables.com/search/models?ctx=models\&q=fidget](https://www.printables.com/search/models?ctx=models&q=fidget)
- [https://www.printables.com/contest/77-fidget-toys](https://www.printables.com/contest/77-fidget-toys)
- [https://cults3d.com/en/search?q=fidget](https://cults3d.com/en/search?q=fidget)
- [https://www.thingiverse.com/search?q=fidget\&page=1\#google_vignette](https://www.thingiverse.com/search?q=fidget&page=1#google_vignette)
- [https://thangs.com/search/fidget?scope=all](https://thangs.com/search/fidget?scope=all)
- [https://makerworld.com/en/search/collections?keyword=fidget](https://makerworld.com/en/search/collections?keyword=fidget)
- [https://makerworld.com/en/models/71654-fidget-cock_n_pull](https://makerworld.com/en/models/71654-fidget-cock_n_pull)
- [Darshan Patel on Instagram: "7 Satisfying 3D-Printed Fidget Toys You’ve Never Seen\!](https://www.instagram.com/reel/DIf2WV2TuBf/?igsh=bjk5eHAwaWk2cmpm)
- [https://www.youtube.com/shorts/kx2nwlETbQQ](https://www.youtube.com/shorts/kx2nwlETbQQ)
- [https://www.youtube.com/shorts/Z1blDYoQ8-A](https://www.youtube.com/shorts/Z1blDYoQ8-A)
- [https://thangs.com/designer/Make%20Anything/3d-model/Snappy%20Switch%20Keychain-1313203](https://thangs.com/designer/Make%20Anything/3d-model/Snappy%20Switch%20Keychain-1313203)

## Physical / Digital Prototyping Tools

- [https://medium.com/@brambos/automotive-ui-prototyping-with-real-car-data-b8cab3bc0621](https://medium.com/@brambos/automotive-ui-prototyping-with-real-car-data-b8cab3bc0621)
- [https://edges.ideo.com/posts/figproxy](https://edges.ideo.com/posts/figproxy)
- [https://microflow.vercel.app/](https://microflow.vercel.app/)

# Class Schedule

## Section 1 Design Fidget toy (Week 1-2)

Quick design exercise to design a fidget toy. Feel free to be inspired by the many that exist.  
What feels good? Why?

- Explore what has been done.
- Sketch Sketch Sketch
- 3D model & print to present Monday of week 3

## Section 2 (Week 3-5)

"Hacky Bird": the student will design and produce a tangible interface that creatively interprets the video game [Flappy Bird](https://flappybird.io/) in the real world without a screen using physical sensors and output. The project will include design, electronics, programming, & prototyping of a ‘works like’ model.

## Section 3 (Week 6-15) Team Project

The final team design project, "AquaNova Submarine", is tasked with creating the next generation of personal submersibles.

See details here:  
[https://github.com/steveturbek/Tangible-Interfaces-Submarine-Design-Project/tree/main](https://github.com/steveturbek/Tangible-Interfaces-Submarine-Design-Project/tree/main)

## Design Process

There are LOTS of diagrams to convey some intangible ideas and best practices of design.

- [https://www.uxbeginner.com/ux-design-processes/](https://www.uxbeginner.com/ux-design-processes/)
- [https://www.figma.com/design/bzcOKTm4IUs733LrS4gnex/Design-Process---Double-Diamond-(Community)?node-id=0-1\&p=f\&t=cOMQyqwtMhjszNnE-0](<https://www.figma.com/design/bzcOKTm4IUs733LrS4gnex/Design-Process---Double-Diamond-(Community)?node-id=0-1&p=f&t=cOMQyqwtMhjszNnE-0>)
- [https://www.designcouncil.org.uk/our-resources/the-double-diamond/](https://www.designcouncil.org.uk/our-resources/the-double-diamond/)
- [https://thedesignsquiggle.com/about](https://thedesignsquiggle.com/about)

## Accessibility and Inclusive Design Resources

**Getting started:**

- [Microsoft’s Inclusive Design Principles](https://inclusive.microsoft.design/)
- [W3C: Designing for accessibility](https://www.w3.org/WAI/tips/designing/)
- Detailed criteria: [W3C’s WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/)
- Focus management: [Microsoft – A11y \- Focus Order](https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order)
- Text resizing plugin: [Text Resizer \- Accessibility Checker](https://www.figma.com/community/plugin/892114953056389734/text-resizer-accessibility-checker)

**Figma plugins for accessibility:**

- Color contrast & vision simulator: [Stark – Contrast & Accessibility Checker](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker)
- Accessibility annotation: [Introduction to design annotation](https://medium.com/@snowjackband/annotating-considerations-for-accessibility-in-figma-4f8185a6779c)
- Duque Systems – [axe for Designers: A Free Accessibility Plugin](https://www.figma.com/community/plugin/1085612091163821851/axe-for-designers-a-free-accessibility-plugin)
- eBay – [Include—Accessibility Annotations](https://www.figma.com/community/plugin/1208180794570801545/includeaccessibility-annotations)
- Indeed – [A11y Annotation Kit](https://www.figma.com/community/file/953682768192596304/a11y-annotation-kit)
- Intopia – [accessibility annotation kit](https://www.figma.com/community/file/1022394680250523675/intopias-accessibility-annotation-kit)
