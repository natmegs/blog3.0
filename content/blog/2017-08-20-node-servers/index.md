---
title:  "Node Servers"
date:   2017-08-20 14:59:30 -0700
description: "Node server basics"
tags: 
  - Tech
  - Node
---

In the process of learning the MEAN stack, I’ve come across several tutorials that use Node functions and libraries but never explain how they work. They may show a Node function and how to use it in a particular use case, but didn't get into the details of how the underlying mechanisms worked. This way of learning has never really worked for me and I end up struggling to use what’s being taught outside the tutorial context. So I decided I needed to start from the ground up in Node specifically, learning how and why everything works.

### De-Mystifying Node

I started the [Understand Nodejs course](https://www.udemy.com/understand-nodejs/learn/v4/overview) from Udemy and so far it’s been exactly what I needed. The instructor is fantastic and really helps to understand the core functionality of Node and explains what’s actually happening under the hood. It has totally demystified many core concepts within Node for me and I am gaining an understanding of how to use the Node core libraries to build custom and tailored applications. I am about 2/3rds of the way through the course now and just finished the section dealing with creating servers.

### Servers

This is such a core concept in Node that I thought I would go through my learning process and include code samples with detailed comments that really helped  me understand what was going on. I’ve tried to be detailed in the comments to break down what’s happening at each step. We started with a very basic server that returned plain text in its response.

`gist:natmegs/81f11655d0ed7c22cd0cf924f5465707#server-plain.js`

We then moved on and created another simple server that returned HTML content in the response.

`gist:natmegs/8c55b8373c88a2103c21fef4bb0546e6#server-html.js`

`gist:natmegs/87a499a71fa9c1f6621151ea26fdc366#index.htm`

Next we created an HTML file that we wanted to have dynamic content. We wanted to replace {Message} with with a message variable.

`gist:natmegs/ec842c1bd51f8225691e9d5424846301#server-htmldynamic.js`

`gist:natmegs/080ee6b8f3e98537000160d6e559d4e3#index2.htm`

Finally, we went back to the original server returning HTML and took out the synchronous readFileSync operation and replaced it with streams.

`gist:natmegs/66fb99138e6977424355f5e3333b3eb5#server-htmlstreams.js`

These exercises helped me understand the basics of building Node servers and maybe it will be helpful to others getting started with Node. If anything is unclear or you have any suggestions or input, I would love to hear your feedback!