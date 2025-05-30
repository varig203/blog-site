+++
date = '2025-04-17T20:19:56-07:00'
draft = false
title = 'New OS'
categories = ['Software']
tags = ["programming", "linux", "osdev", "rust", "wayland"]
+++

# ON HOLD

# Introduction

I am currently making a new OS. Why you may ask? I am tired of all distros and OSes lack of care for the *user*. 

MacOS tries, but there are some inconsistencies which appear to have been there since the dawn of it. Windows? I don't really have to explain but it is mainly profit driven with little care of the user or the privacy of said user. 

Linux? That’s my base, sure; but even here, there are serious flaws. Most distros fall apart at the **Desktop Environment** layer. That’s where the real problem lies.

## Why the DE?

Let’s take KDE for example; incredibly powerful, no doubt. But from the perspective of an average user, it can be *overwhelming*. So many toggles, options, and modules; it quickly becomes a chaotic experience. (For reference, I last used KDE around version 5.25.)

Then there's GNOME, sleak and clean by default, but requires tons of extensions to fully customize it how you want it, and overwhelming again for the average user to need to know how extensions work or sometimes break the desktop. (This is my current main DE)

# What I am building

I am gonna start building a Void Linux-based distro using a custom desktop environment I am going to create entirely from scratch. It'll be powered by Wayland, built with Smithay, and written in Rust. 

The project is going to be called **Andromeda OS** as a whole and the Desktop Environment will be called **Andromeda Desktop Environment**,  or just **ADE** for short.

The goal? A desktop that's clean, consistent, and designed *for humans*, not developers or corporations.

### Why Rust?

I like the memory safety of Rust, and it has similar performance to what I am used to which is C/C++. 

It also has a compiler that doesn't try to fight you (*looking at you Java*) and rather helps you. It teaches you as you go, which I really appreciate.

### Why Wayland + Smithay

Wayland is new and I don't want to be stuck in the old conventions of X11 and that's it. 

However, for Smithay I chose it because I wanted to quickly start on building the UI and UX.

# Where's it at?

It currently has years worth of planning due to school and some procrascination not letting me start. It originally started as a plan with full custom kernel but I realized it was too ambitious for a solo dev.

This blog will serve as a devlog, I will try to post updates and progress as much as I can but no promises. Life happens.

# Who's behind this?

Just me. One dev. No team. No funding. No startup.

Just a keyboard, a terminal, and a vision/dream (whatever you wanna call it).