#include <stdio.h>
#include <libmill.h>

coroutine void worker(int count, const char *text) {
  int i;
  for(i = 0; i != count; ++i) {
    printf("%s\n", text);
    msleep(now() + 10);
  }
}

int main() {
  go(worker(4, "a"));
  go(worker(2, "b"));
  go(worker(3, "c"));
  msleep(now() + 100);
  return 0;
}
