# etdiyim arastirmalar

=======

## difference between var,let,const

### ilk once var ile let arasindaki ferqi izah edim. Biz var istifade etdikde (var number = 10;) buna yeniden 2 yollada basqa deyer vermek mumkundur yeni (var number = 20; ve ya number = 20;) bunlarin her 2-sinden de istifade etdikde hec bir problemle qarsilasmiriq. lakin let istifade etdikde bu 2 yoldan 1cisi ile yeniden deyer vermek mumkun olmur ex:(let number = 20; let = 30;)bu formada yeniden deyer vermek mumkun olmur. ancaq 2ci yolla yeniden adlandirmaq mumkundur (let number = 20; number = 30;). const-un menasi constant yeni sabit demekdir. constu hec bir yolla (reference olmasi xaricinde daxilindeki elementi deyismek mumkundu) yeniden deyer vermek ve ya deyer elave etmek mumkun deyil. ex:(const number = 20; const = 30; number = 30;) bu yollarin her 2-sin istifade etdikde netice ala bilmiyecik.

## console in Javascript (log,error,wran,group,clear,table)

### console yazdigimiz kodlari cagirmaq ve gormek ucun istifade olunan yerdir. console.log() bu moterizenin daxiline yazilan emrleri consolda gostermek ucun istifade edilir. console.wran(Bu Tehlukelidir !) bu her hansi bir tehlukeni bildirmek ucun consolda istifade edile biler. console.error(Burda Sehv var !) console.error kodun her hansi bir qisminde sehflik olarsa bunu bildirmek ucun istifade edilir. console.clear() consolu temizlemek ucun istifade edilir. console.table() her hansi bir siyahi yaratmaq ucun istifade oluna biler.

## data types in javascript

### Javascriptin 2 data tipi var pirimitive ve reference. pirimitive data tipinin novleri:number,stringe,null,undifiend,boolean|| reference data tipinin novleri:
