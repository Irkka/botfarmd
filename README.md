# Botfarmd

An IRC bot control daemon that enables spawning an arbitrary number of extendable IRC clients. Bot configurations and plugin loadouts can be defined in a simple configuration file.

An important design principle is that plugins can be loaded from other npm packages and creating a new plugin means only to inherit from the "abstract" Plugin class provided by Botfarmd. Botfarmd then injects proper event-emitting IRC clients to their respective plugin instances that can subsequently do anything to them.
