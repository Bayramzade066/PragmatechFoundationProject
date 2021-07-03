# etdiyim arastirmalar

=======

## difference between var,let,const

### ilk once var ile let arasindaki ferqi izah edim. Biz var istifade etdikde (var number = 10;) buna yeniden 2 yollada basqa deyer vermek mumkundur yeni (var number = 20; ve ya number = 20;) bunlarin her 2-sinden de istifade etdikde hec bir problemle qarsilasmiriq. lakin let istifade etdikde bu 2 yoldan 1cisi ile yeniden deyer vermek mumkun olmur ex:(let number = 20; let = 30;)bu formada yeniden deyer vermek mumkun olmur. ancaq 2ci yolla yeniden adlandirmaq mumkundur (let number = 20; number = 30;). const-un menasi constant yeni sabit demekdir. constu hec bir yolla (reference olmasi xaricinde daxilindeki elementi deyismek mumkundu) yeniden deyer vermek ve ya deyer elave etmek mumkun deyil. ex:(const number = 20; const = 30; number = 30;) bu yollarin her 2-sin istifade etdikde netice ala bilmiyecik.

## console in Javascript (log,error,wran,group,clear,table)

### console yazdigimiz kodlari cagirmaq ve gormek ucun istifade olunan yerdir. console.log() bu moterizenin daxiline yazilan emrleri consolda gostermek ucun istifade edilir. console.wran(Bu Tehlukelidir !) bu her hansi bir tehlukeni bildirmek ucun consolda istifade edile biler. console.error(Burda Sehv var !) console.error kodun her hansi bir qisminde sehflik olarsa bunu bildirmek ucun istifade edilir. console.clear() consolu temizlemek ucun istifade edilir. console.table() her hansi bir siyahi yaratmaq ucun istifade oluna biler.

## data types in javascript

### Javascriptin 2 data tipi var pirimitive ve reference. pirimitive data tipinin novleri:number,stringe,null,undifiend,boolean|| reference data tipinin novleri:array,function,object

## logical operators

### logical operatorlar 3 yere bolunur: OR || , AND && , NOT !, OR yeni veya oldugda 2 terefden 1i true dirse netice true cixacaq yalnizca (False || False) olduqda netice false cixacaq. and olduqda ise bunun tam eksi sayilar yeni daxilinde false varsa netice false cixacaq 2 terefde true olarsa (True && True) netice true olacaq. Not ise neticeni eksine cevirir yeni False ! olsa True olacaq True ! olarsa netice False olacaq. !! olduqda ise netice tam dovr ederek yeniden eyni neticeni qaytarir yeni false !! olduqda true sonra yeniden False olur ve netice false cixir.

## Arithmetic operators(modulus.increment,decrement)

### aritmetic operatorlar hesablama islerini gormek ucun istifade oluna biler. Modulus terefleri boldukden sonra yaranan qaliqi gosterir yeni ex:(let = value; const a = 10; ; const b = 3; value = a % b; console.log(value)); bu halda netice consolda 1 gorsenecek yeni 10/3 cavab 3 olur qaliq ise 1 qalir modulusda qaliqi consola yazir. diger butun hesablamalarda bu mentiqle hell olunur ( + - / ).

## Difference between arrays which are declared with let and const?

### aralarindaki ferq ondan ibaretdirki let istifade olundugda biz array-in daxilindeki elementlerede, let-in oz elementlerinede yeni deyer elave ede bilerik. Lakin const istifade etdikde array-in daxilindeki elementlere yeni element elave etmek olsa da const-un ozune hec cur yeni element elave etmek olmur.

## Difference between for, for in, foreach,for of, while.

### ilk once for ve while dovru arasindaki ferqden danisacam. for dovrunde dovrun nece artaraq davam edeceyi for-un paramterleri daxilinde qeyd edilir lakin while dovrunde artib veya azalacaqi dovrun daxilinde istenilen formada deyisdirile biler.Bu dovrler oldugu halda nie for in, for of, forEach kimi dovrlere ehtiyac duyulur? bu dovrlerin digerlerinden ferqi ondan ibaretdir ki, array ve s. daxilindeki elementler daha elcatan olur ve bunlar ucun istifadesi daha mentiqlidi.

## Difference between promt, confirm, alert

### Bunlar javascriptin bildiris emrleri ucun istifade olunur. 1ci-alert i qeyd edek alert xeberdarliq bildirimi ucun istifade olunur sehifede xeberdarliq bildirisi gondermek istediyiniz zaman alertin daxiline xeberdarliq melumatinida yazaraq ex:alert("bu xeberdarliqdi") seklinde emri yerine yetirmek mumkundur.2ci-confirm her hansi bir melumati deqiqlesdirmek(tesdiqlemek) ucun istifade olunur. confirmin secenekleri olur eger tesdiqleyerse true, tesdiqlemezse false olur.3cusu ise promtdur. promt istifadeciden her hansi bir melumat almaq ucun istifade olunur.

## Difference between innerHtml,innerText,textContent?

### aralarindaki ferqler sadece gorunusde deyisir. biz innerText ile her hansi bir yazini oturdukde yazi htmlde oldugu kimi (script ve style taglari xaric) gosterilir. yeni egeer yazinin daxilinde bosluq, span ve ya basqa bir tag yazilibsa onuda yazildigi kimi goruntuleyir. InnerHtml de ise bu tag leri ve aradaki bosluqlari goruntuluyerken gizledir. textContentin bu 2sinden ferqi ise ondadir ki, bosluqlari gosterdiyi halda tag-leri ve onlarin daxilindeki yazini ve s. goruntulemir.
