+++
date = '2025-07-12T21:23:14-07:00'
title = 'How to install Hyprland on Void Linux'
categories = ['Tutorial']
tags = ["linux", "wayland", "hyprland", "voidlinux", "tutorial"]
+++

# Introduction

Assuming you don't know what is Void Linux nor Hyprland, no worries! 

Void Linux is a Linux distribution aimed for advanced users. It is a rolling release which means it will get updates forever and you do not need to switch between versions, like Ubuntu 22.04 to 24.04 or Windows 10 to 11. It also doesn't use SystemD and instead uses runit which is argued to be more secure and faster. As with all distributions they have their pitfalls like this one has a small amount of avaliable software like in this case not providing Hyprland.

Hyprland is a tiling window manager running Wayland. It is like dwm (Dynamic Window Manager) but it is on Wayland which is the more modern alternative to X11.

I use both of these tools as I like the freedom and the fun of customizing my computer to my liking. Void Linux was chosen after years of struggling with using Arch Linux due to it's instability and trying many distribution but not liking any like, Ubuntu, Fedora, Gentoo, Linux From Scratch, OpenSUSE, and FreeBSD. Hyprland was chosen because I wanted to use my keyboard more and I thought it was the best choice when I found it browsing [r/unixporn](https://www.reddit.com/r/unixporn)!

# Section 1: Setting up the environment

## Update Void Linux!

Before doing anything, update your system. Assuming you're using the default setup (with `sudo`), run:

```bash
sudo xbps-install -Su
```
If you use `doas` instead of `sudo`, just swap the command.

## Add the Hyprland Repository
### Option 1: Automatic

This command adds the Hyprland Void repo automatically. If you’re not comfortable with running random commands from the internet, you can skip to the manual method. Be sure to replace the architecture string at the end if you're not using x86_64-glibc.

Options:
- x86_64-glibc
- x86_64-musl
- aarch64-glibc
- aarch64-musl

```bash
echo repository=https://raw.githubusercontent.com/Makrennel/hyprland-void/repository-x86_64-glibc | sudo tee /etc/xbps.d/hyprland-void.conf
```

### Option 2: Manual
Now we have to create a new file in `/etc/xbps.d/` called `hyprland-void`

```bash
sudo touch /etc/xbps.d/hyprland-void
```

Edit it using your favorite editor (I'm using Vim here):

```bash
sudo vim /etc/xbps.d/hyprland-void
```

Paste in the appropriate repo URL depending on your system:

```conf
repository=https://raw.githubusercontent.com/Makrennel/hyprland-void/repository-x86_64-glibc
```

## Update XBPS repositories

Now that the repo is added, update the index and accept the fingerprint when prompted:
```bash
sudo xbps-install -S
```

# Section 2: Install Hyprland
## Installing

Check if Hyprland appears in your repo:

```bash
xbps-query -Rs hypr
```

If it does, you’re good to go! Install Hyprland and its xdg portal:

```bash
sudo xbps-install -S hyprland xdg-desktop-portal-hyprland
```
**NOTE**: If you use an Nvidia GPU, refer to the [Hyprland Wiki’s Nvidia section](https://wiki.hypr.land/Nvidia/) for extra setup steps.

# Conclusion
I encourage you to read [The Hyprland Wiki](https://wiki.hypr.land/) for further information. It includes information about software like detecting idling and screenlocking and wallpapers. However, that is all from me and I encourage you to experiment and have fun with your system. Break it and fix it yourself is the way of Linux afterall.

## Sources
- [Makrennel’s Hyprland-Void Repo](https://github.com/Makrennel/hyprland-void)