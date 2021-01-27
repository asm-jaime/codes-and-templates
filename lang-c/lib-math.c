#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <string.h>

int main(){
  double eps = -3.140045405004505;
  double res = fabs(eps);

  //snprintf(eps_ch, 12, "%lf", eps);
  printf("%.10f", res);

  return 0;
}
