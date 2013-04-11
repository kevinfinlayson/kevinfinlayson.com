---
layout: single-post
title: Animation in UI Design
---

In a [visually rich, fine-grained post](http://branch.com/b/transitional-interfaces-design-ux), [Elepath](http://www.elepath.com) designer and animator [Pasquale D’Silva](http://psql.me) calls for designers to think about animation as a critical aspect of UI design.

>“Folks keep throwing around the word ‘delight’ when referring to animation and cute interactions. Cool and great for those guys. Guess what though? Animation can be used functionally too. It's not just an embellished detail.”

He goes on to argue that it’s important for designers to think not just about spacing and visual style, but about time—“an overlooked dimension that stitches space together.”

In one particularly interesting example, D’Silva argues that you can actually drop some of the conventionally used way finding and breadcrumb design patterns, because the animations themselves communicate where a user is in an interface:

>“An advantage of remaining inline is that you can remove the need to explain how deep a user is embedded into sub-views. You can scrap the display of a hierarchical navigation, because the user saw how they got there.”

**The pitfalls of animated UIs**

In a [subsequent Branch discussion](http://branch.com/b/transitional-interfaces-design-ux), designers [Matt Whitely](http://greatfridays.com) and [Tyler Sticka](http://tylersticka.com/) rightly express concern that animations can become suerpfluous or even counter-productive if they slow down or ‘block’ users. This was an all-too common problem when CSS3 transitions started to be widely used—and in fact, I mostly stopped using them myself, preferring the instantaneousness of transition-free UIs. However, D’Silva eloquently re-states his original argument—that animation can offer something beyond ornamental flourishes:

>“I think there is so much value in animation as a functional design property. Information can be encoded in motion. It provides the link between different contexts.”

In short—there’s potential here, we just need to become more mature as users of animation in UI design.

**The shortcomings of current front-end prototyping tools**

From there, the Branch discussion moves into the shortcomings of current front-end animation tools. Pasquale puts it thus:

>“[…] The tools to create animation for interfaces are not ideal at all. I'd love to spend some time with some bright engineers to build better tools for animation. You shouldn't have to write a bunch of code to create something so abstract. It pigeon holes you into designing animation procedurally, and doesn't let you dream big.”

Designer/Developer [Kirupa Chinnathambi](http://www.kirupa.com/) summarizes the problem in terms of a question of putting the right people together to tackle the problem:

>“How can we get the people who write the tools to talk to the people who write the frameworks/languages? How can we get the people who create the cool animations involved in the conversation between the tool creators and the language creators?”

**How Facebook Prototyped Home**

One particularly visible argument for dynamic prototyping tools comes with the recent unveiling of [Facebook Home](https://www.facebook.com/home), an interface rich with animations and fast, customized physics.

In her follow-up post about the process and people behind Home, ‘[Go Big By Going Home](https://medium.com/the-year-of-the-looking-glass/af182add5a2f)’, Facebook product designer [Julie Zhou](http://www.juliezhuo.com/) discusses the team’s need for an alternative to the most commonly used static prototyping tool:

>“…something like Facebook Home is completely beyond the abilities of Photoshop as a design tool. How can we talk about physics-based UIs and panels and bubbles that can be flung across the screen if we’re sitting around looking at static mocks? (Hint: we can’t.)” 

Zhuo goes on to discuss how Facebook Home was actually prototyped using Quartz Composer, which was introduced to the team by designer [Mike Matas](http://mikematas.com). The benefits, she argues, are enormous: 

>“Not only does QC make working with engineers much easier, it’s also incredibly effective at telling the story of a design. When you see a live, polished, interactable demo, you can instantly understand how something is meant to work and feel, in a way that words or long descriptions or wireframes will never be able to achieve.”

**The way forward**

I’m intrigued by Elepath‘s own ‘[Moonbase](http://moonbase.com)’ animation tool, which “lets you create animations by plugging noodles into blocks”. I can’t help but think that there’s potential here for a jQuery animation GUI: rather than have users tweak easing functions, what if designers could select specific elements, and use noodle-and-block overlays *right in the browser* to tweak the animations as desired. The tool would then spit out motion functions that can be copy/pasted as required.

Does anyone else have ideas for empowering UI designers to experiment with animations in their designs? Let’s move the discussion forward, and hopefully some ideas for great new tools will emerge.
