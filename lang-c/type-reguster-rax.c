#include <stdio.h>
#include <math.h>
#include <stdint.h>
#include <inttypes.h>

void* getRax(void) {
  double first_double, second_double;
  second_double = modf(666.333, &first_double);

  uint32_t first_int32 = (uint32_t) first_double;
  uint32_t second_int32 = (uint32_t) (second_double*1000000000);

  uint64_t result = first_int32;
  printf("fi32: %" PRId64 "\n", result);
  result = result << 32;
  printf("%" PRId64 "\n", result);
  result = result + second_int32;
  printf("%" PRId64 "\n", result);
  return (void*)result;
}

uint64_t (*_getRax)() = (void*)getRax;

int main(void) {
  uint64_t rax = _getRax();
  printf("rax: %" PRId64 "\n", rax);

  uint32_t first = rax>>32;
  double res = (double)(rax>>32)+(double)(rax - ((uint64_t)first<<32))/1000000000;
  /* double second = (double)(uint32_t)(rax - ((uint64_t)first<<32))/100000000; */
  printf("total: %f\n", res);

  /* printf("total: %" PRId32 " %" PRId32 " \n", first, second); */
}
