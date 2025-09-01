---
title: 'Sistemul Canon RT are probleme tehnice grave'
description: 'In acest articol imi impartasesc experienta proasta cu sistemul Canon RT'
pubDate: 'Sep 1, 2025'
updatedDate: 'Sep 1 2025'
author: 'Voicu Andrei'
heroImage: '/public/assets/canon-rt-thumbnail.png'
tags: ["echipament", "lumina", "canon"]
---

Dacă ești utilizator Canon și vrei să faci poze cu off-camera-flash, probabil te-ai documentat și ai observat că ai câteva variante de a-ți folosi flash-ul Canon fără să fie atașat la camera ta.

Una din variantele acestea este să folosești un transmitator Canon ST-E3-RT sau un alt flash Canon RT (precum 430EX III-RT și 600EX-RT). În acest articol voi povesti experiența mea (nu tocmai pozitivă) cu sistemul Canon RT și voi împărtăși recomandările mele în legătură cu alegerea sistemului wireless pentru blițurile dumneavoastră.

## Care e treaba cu Canon RT?

![Cateva din bliturile Canon care suporta sistemul wireless Canon RT](/assets/probleme-canon-rf/RT-lineup.png)

<p class="caption">Cateva din bliturile Canon care suporta sistemul wireless Canon RT</p>

Canon a introdus sistemul Canon RT (Radio Transmission) în anul 2012 prin blițul 600EX-RT și transmițătorul ST-E3-RT pentru a înlocui vechiul sistem optic pe infraroșu pe care îl folosea până la acel moment. Sistemul wireless pe 2.4 GHz are numeroase avantaje peste sistemul optic:

- Poate controla mai multe grupuri de blițuri (5 grupuri a câte 15 blițuri pe sistemul RT, doar 3 grupuri pe sistemul optic)
- Are distanță mai mare de transmisie, aproximativ 30 de metri comparativ cu maxim 15 metri pe sistemul optic
- Funcționează fără “line-of-sight” (vizibilitate directă între transmițător și bliț), pe cand transmițătorul optic trebuia să “vadă” blițurile
- Nu este afectat de lumina puternică a soarelui
- Are mai multe canale de transmisie, astfel încât este mult mai greu ca alt fotograf să-ți declanșeze blițurile neintenționat (RT are 15 canale, sistemul optic are 4)

Cu toate acestea, sistemul Canon RT nu a fost actualizat de 13 ani, ceea ce este fenomenal pentru compatibilitatea dispozitivelor mai vechi însă este detrimental pentru funcționalitatea acestui sistem în anul 2025.

## Ce s-a întâmplat cu Canon RT?

Dacă citești acest articol, cel mai probabil folosești un router WIFI care îți dă acces la internet (sau folosești date mobile). La fel ca tine și mine, mulți alți oameni folosesc routere WIFI, iar aceste routere folosesc frecventa 2.4Ghz, la fel ca sistemul Canon RT. Ce înseamnă asta? Înseamnă ca dacă folosești blițuri și transmițătoare RT in zone unde sunt multe routere WIFI, precum zonele rezidențiale, acele routere vor bruia sistemul RT. Turnurile și antenele de transmisie 4G și 5G pentru date mobile nu fac nici ele bine sistemului Canon RT. Acestea folosesc frecvente apropiate de 2.4Ghz (2.3, 2.5, 2.6) ceea ce “aglomerează” spectrul radio din jurul sistemul RT. 

In 2012 nu existau date mobile 5G iar routerele WiFi nu erau atât de răspândite, nu aveau putere de transmisie la fel de mare și foloseau frecvente ușor diferite de cele de acum. Astfel, în 2025, sistemul Canon RT este extrem de ușor de bruiat de orice dispozitiv care utilizează WiFi 2.4Ghz.

## De ce este acest bruiaj o problemă?

Practic, când folosești blițuri și transmițătoare Canon RT și ești într-o zonă cu routere WiFi, există o mare posibilitate ca acestea să se desperecheze între ele, după care trebuie să mergi la fiecare bliț și să îl repornești pentru reconectare. Acesta este ultimul lucru care vrei să fii nevoit să-l faci în mijlocul unei ședințe foto.

Din câte am înțeles, problema constă în faptul ca dupa ce o comandă trimisă de transmițător către bliț este bruiată de semnale WIFI externe, blițul se deconectează, având o eroare, și nu se reconectează singur la transmițător pentru a relua operația. De aceea e nevoie să repornim blițul. Blițurile precum 430EX-III RT nu pot primi update-uri de soft, deci practic acest “bug” din software-ul blițului nu poate fi rezolvat de Canon prin update de software. 

## Experiența mea cu Canon RT

Am folosit transmițătoarele Canon ST-E3-RT și Yongnuo YN-E3-RT (clonă a celui Canon), separat, împreună cu blițuri Canon 430EX-III RT. Cu ambele transmițătoare, blițurile s-au deconectat constant la fiecare 5-10 minute. Uneori nici măcar atât nu dura, ci chiar 2-3 minute. Nici nu am îndrăznit să le folosesc la vreo ședință foto. Nu știu dacă blițurile mai scumpe precum seria 600EX-RT funcționează mai bine, însă după numeroasele comentarii din partea altor utilizatori ale acestor blițuri, că este o problemă universală a sistemului Canon RT. 

## Canon RT versus alte sisteme wireless

![Transmitator wireless Godox XPro-II si receptor wireless Godox X1R](/assets/probleme-canon-rf/godox-system.png)

<p class="caption">Transmitator wireless Godox XPro-II si receptor wireless Godox X1R</p>

Din păcate, Canon nu pare să adreseze această problemă, aceștia încă producând blițuri noi precum EL-1, EL-5 care folosesc același sistem vechi de peste 13 ani. Din cauza aceasta am fost nevoit să îmi mut atenția către alte sisteme wireless precum cele Godox și Yongnuo. Yongnuo are numeroase sisteme wireless, printre care YN-622 și YN-560, dar și sistemul lor RT care este o clonă directă a sistemului Canon RT, ceea ce le permite să comunice cu blițuri și transmițătoare Canon însă le dă aceleași probleme pe care le au respectivele dispozitive. Godox, pe de altă parte, are doar sistemul Godox X și vechiul sistem FT. Sistemul X folosește frecvente 2.4Ghz însă nu suferă de problemele sistemului Canon RT. Am achiziționat un transmitator Godox XPro-II și receptoare Godox X1R pentru blițurile mele Canon (nu sunt necesare receptoare pentru blițurile Godox, deoarece acestea au sistemul X integrat) și nu am avut nicio problemă cu acest setup. 

## Concluzie și recomandările mele

Sistemul Canon RT este unul problematic, acesta este singurul mod de a descrie sistemul care cândva era revoluționar însă nu a trecut testul timpului. Poate unele blițuri funcționează mai bine decât altele, dar acest lucru nu scuză Canon de faptul că încă vând sisteme care pur și simplu nu funcționează. 

Eu unul m-am axat pe sistemul Godox, acesta oferind multe opțiuni de blițuri și lumini de studio, dar în mare parte pentru că oferă un sistem wireless care funcționează corespunzător (și pentru ca pot folosi blițurile mele Canon cu el).

Îi sfatuiesc astfel pe cititorii acestui articol să aleagă sistemul care funcționează pentru ei, fie acela cel Canon, Yongnuo, Godox sau alt sistem de pe piață. Însă, îi mai sfătuiesc să aibă grijă cu sistemul Canon și să-l testeze temeinic pentru a fi siguri că nu îi va lăsa le greu.