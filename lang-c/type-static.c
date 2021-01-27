#include <stdio.h>

void increase() {
  static int reg;
  reg++;
  printf("%d\n", reg);
}

int main(void) {
  increase();
  increase();

  return 0;
}
