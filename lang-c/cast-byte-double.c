#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define INT 0
#define DOUBLE 1

typedef unsigned char byte;

byte* doubleToByte(double f) {
  byte* ret = malloc(4 * sizeof(byte));
  unsigned int asInt = *((int*)&f);
  int i;
  for (i = 0; i < 4; i++) {
    ret[i] = (asInt >> 8 * i) & 0xFF;
  }
  return ret;
}

double* byteToDouble(double f) {
  byte* ret = malloc(4 * sizeof(byte));
  unsigned int asInt = *((int*)&f);
  int i;
  for (i = 0; i < 4; i++) {
    ret[i] = (asInt >> 8 * i) & 0xFF;
  }
  return ret;
}

int main(void) {
  byte* res = doubleToByte(666.666);

  for (int i=0; i<4; i++) {
    printf ("byte %d is %02x\n", i, res[i]);
  }

}
