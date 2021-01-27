/* #include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <stdio.h>
#include <stdlib.h>

#define INT 0
#define DOUBLE 1

double global_kek;
union S {
        uint32_t u32;
        uint16_t u16[2];
        uint8_t  u8;
}

void* c_polim(int type) {
  switch (type) {
    case INT:
      return (void*)-555;
    case DOUBLE:
      [>global_kek = 666.666;<]
      [>return (void*)&global_kek;<]
      return (void*)(long)666.666;
  }
  return (void*)0;
}

int main() {
    int i = (size_t)c_polim(INT);

    double d = (size_t)c_polim(DOUBLE);
    [>double *dd;<]
    [>dd = (double *)(long)d;<]

    printf("int = %d\n", i);
    printf("double = %lf\n", d);
} */

#include <stdio.h>
#include <stdlib.h>

#define INT 0
#define DOUBLE 1

typedef union {
  int fst;
  double sec;
} some_union;

some_union c_polim(int type) {
  some_union x;
  switch (type) {
    case INT:
      x.fst = -555; break;
    case DOUBLE:
      x.sec = 666.666; break;
  }
  return x;
}

int main() {
  int fst = c_polim(INT).fst;
  double sec = c_polim(DOUBLE).sec;

  printf("int = %d\n", fst);
  printf("double = %lf\n", sec);
}
