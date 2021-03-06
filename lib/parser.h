#pragma once

#include <napi.h>
#include "lib.h"

bool getColour(Napi::Value value, Colour* colour);
bool getRect(Napi::Value value, Rect* rect);
bool getCoordinate(Napi::Value value, Coordinate* coords);
bool getSize(Napi::Value value, Size* size);
bool getTextProps(Napi::Value value, TextProps* textProps);
bool getDevice(Napi::Value value, Device* device);
