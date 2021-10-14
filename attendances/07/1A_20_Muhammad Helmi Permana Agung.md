## JOBSHEET 7

## PERULANGAN 1

### Tujuan

Mahasiswa mampu menyelesaikan permasalahan/studi kasus menggunakan sintaks perulangan 1 dan mengimplemantasikannya dalam bahasa pemrogaman java.

### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1 : Penggunaan for, while dan do-while

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart perulangan for dibawah ini!

    <p align="left">
    <img width="197" height="259" src="images/flowchartFaktorial.png">
    </p>
    

> Flowchart diatas digunakan untuk menghitung nilai faktorial, selanjutnya kita akan membuat programnya berdasarkan
> flowchart di atas!

2. Tambahkan library Scanner, deklarasi Scanner, dan buat variabel angka untuk menampung data yang diinput melalui keyboard




```Java
// Ketik kode program di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int angka;
```

3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas


```Java
// Ketik kode program di bawah sini
int faktorial=1;
```

4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan: ");
angka=input.nextInt();
for(int i=1; i<=angka; i++)
    faktorial*=i;
System.out.print("Nilai faktorial bilangan tersebut adalah: "+faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan: 4
    Nilai faktorial bilangan tersebut adalah: 24

5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====");
System.out.print("Masukkan Bilangan: ");
angka=input.nextInt();
int i=1;
while (i<=angka){
    faktorial*=i;
    i++;
}
System.out.print("Nilai faktorial bilangan tersebut adalah: "+faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan: 4
    Nilai faktorial bilangan tersebut adalah: 24

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN DO-WHILE=====");
System.out.print("Masukkan Bilangan: ");
angka=input.nextInt();
int i=1;
do{
    faktorial*=i;
    i++;
}
while(i<=angka);
System.out.print("Nilai faktorial bilangan tersebut adalah: "+faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN DO-WHILE=====
    Masukkan Bilangan: 4
    Nilai faktorial bilangan tersebut adalah: 24

##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

// Ketik jawaban disini

"faktorial*=i" adalah statement yang berupa operasi untuk menghitung nilai faktorial, dapat juga ditulis sebagai "faktorial = faktorial * i"

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int angka;
int faktorial=1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL=====");
System.out.print("Masukkan Bilangan: ");
angka=input.nextInt();
System.out.print(angka +" Faktorial = ");
for(int i=1; i<=angka; i++){
	faktorial*=i;
	System.out.print(i);
	if(i<angka) System.out.print("x");
}
System.out.print(" = "+faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL=====
    Masukkan Bilangan: 5
    5 Faktorial = 1x2x3x4x5 = 120

#### Percobaan 2 : Keluar dari perulangan menggunakan break

#### Waktu percobaan : 40 menit

1. Buatlah perulangan dengan menggunakan for yang memanfaatkan keyword break
<p align="left">
    <img width="696" height="124" src="images/for2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
Scanner input = new Scanner(System.in);
int angka, total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
for(total=0;true;){
    System.out.print("Masukkan Bilangan: ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan: "+total);

```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan: 5
    Masukkan Bilangan: 56
    Jumlah angka-angka yang telah dimasukkan: 61


2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka,total;
System.out.println("===PROGRAM WHILE LOOP DENGAN BREAK===");
total=0;
while(true){
    System.out.print("Masukkan Bilangan: ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan: "+total);

```

    ===PROGRAM WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan: 6
    Masukkan Bilangan: 56
    Jumlah angka-angka yang telah dimasukkan: 62


3. Tuliskan perulangan diatas dalam struktur do-while
    <p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka,total;
System.out.println("===PROGRAM DO-WHILE LOOP DENGAN BREAK===");
total=0;
do{
    System.out.print("Masukkan bilangan: ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan: " +total);

```

    ===PROGRAM DO-WHILE LOOP DENGAN BREAK===
    Masukkan bilangan: 5
    Masukkan bilangan: 54
    Jumlah angka-angka yang telah dimasukkan: 59


##### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

// Ketik jawaban disini

kode program tersebut berfungsi untuk membuat user dapat menginput angka, hingga total angka yang diinput nilainya maksimal 50, jika lebih dari 50 maka programnya berhenti dan memberikan output berupa total angka yang diinput

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


// Ketik jawaban disini

kode tersebut berfungsi sebagai ekspresi untuk inisialisasi dan kondisi

#### Percobaan 3 : Keluar dari step perulangan menggunakan continue

#### Waktu percobaan : 40 menit

1. Buat program looping menggunakan struktur perulangan for seperti di bawah ini: 
<p align="left">
    <img src="images/forContinue.jpg" align="left">
    </p>



```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int angka, total, count;
double avg;
count=0;
System.out.println("===PROGRAM FOR LOOP DENGAN CONTINUE===");
for(int i=0;i<5;i++){
    System.out.print("Masukkan bilangan: ");
    angka=input.nextInt();
    if(angka>=50) continue;
    total+=angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50: "+total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50: "+avg);

```

    ===PROGRAM FOR LOOP DENGAN CONTINUE===
    Masukkan bilangan: 5
    Masukkan bilangan: 4
    Masukkan bilangan: 5
    Masukkan bilangan: 4
    Masukkan bilangan: 4
    Jumlah angka-angka yang kurang dari 50: 22
    Rata-rata angka yang kurang dari 50: 4.4


5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

// Ketik jawaban disini

Perbedaan dari percobaan 2 dan 3 adalah, ketika percobaan 2, sewaktu user menginput angka yang totalnya lebih dari 50, maka program akan langsung berhenti dan memberikan output berupa total angka yang telah dimasukkan, sedangankan untuk percobaan 3, program berjalan dengan memaksa user menginput angka di bawah 50 sebanyak 4 kali, jika ada input yang angkanya di atas atau sama dengan 50, program tidak menghiraukan angka tersebut dan mengulangi langkah yang dilakukan sebelumnya hingga ketika user telah menginput 5 angka, program akan memberikan output berupa jumlah dari angka-angka di bawah 50 tersebut sekaligus rata-ratanya

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>

// Ketik jawaban disini

perintah kode tersebut berfungsi untuk mengabaikan input user yang nilainya lebih dari 50

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program yang meminta masukan user sebuah bilangan bulat N (N > 0). Program kemudian menampilkan penjumlahan N bilangan genap positif pertama (bilangan genap ≥ 0).
Contoh: 
    •	Jika user memasukkan N = 10, program akan menghitung banyaknya jumlah bilangan positive di dalam range bilangan 1-10   kemudian menampilkan penjumlahan bilangan positive bilangan bilangan diantara 1-10 yaitu : 
        0 + 2 + 4 + 6 + 10 = 30. 
        Setelah itu program akan menampilkan rata-rata dari bilangan positive yang telah dijumlahkan tadi.
    •	Contoh output program dan flowchart
<br/><img width="303" height="529" src="images/hasilTugasFc.jpg" align="left"><br/>
  

<br/><img width="303" height="529" src="images/fcTugasJS7.png" align="left">



```Java
// Ketik kode program disini
Scanner input = new Scanner(System.in);
int bil, jmlBilGenap, totalGenap=1;
double avg;
System.out.print("Masukkan angka: ");
bil=input.nextInt();
jmlBilGenap=bil/2;
System.out.printf("Jumlah bilangan dari 1 sampai  %d adalah %d\n",bil,jmlBilGenap);
System.out.print("Angka genap dalam range tersebut adalah");
int i;
for(i=1;i<=bil;i++){
    if(i%2!=0) continue;
    System.out.printf(", %d",i);
    totalGenap+=i;
}
avg=totalGenap/jmlBilGenap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bil,totalGenap-1);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %.1f",bil,avg);

```

    Masukkan angka: 12
    Jumlah bilangan dari 1 sampai  12 adalah 6
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10, 12
    Hasil penjumlahan bilangan genap dari 1 sampai 12 adalah 42
    Rata-rata bilangan genap dari 1 sampai 12 adalah 7.0




    java.io.PrintStream@1e683d5f



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
// Ketik kode program disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int angka;
System.out.print("Masukkan angka: ");
angka=input.nextInt();
int i;
for(i=1;i<=angka;i++){
    if(i%5==0) continue;
    System.out.println(i);
}
```

    Masukkan angka: 15
    1
    2
    3
    4
    6
    7
    8
    9
    11
    12
    13
    14


3. Buatlah sebuah program yang menampilkan deret bilangan fibonacci sebagai berikut. Dimana bilangan yang terletak di sebelah kanan adalah hasil penjumlahan dari 2 bilangan sebelumnya
 <p align="left">
    <img width="451" height="226" src="images/fibo.png" align="left">
    </p>



```Java
// Ketik kode program disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int banyakBil, bil1=0, bil2=1, bil3=1;
System.out.println("Seri Fibonacci");
System.out.print("Berapa bilangan yang ditampilkan? ");
banyakBil=input.nextInt();
int i;
for(i=1;i<=banyakBil;i++){
    System.out.printf("Penjumlahan dari: %d + %d = %d\n",bil1,bil2,bil3);
    bil1=bil2;
    bil2=bil3;
    bil3=bil1+bil2;
}
```

    Seri Fibonacci
    Berapa bilangan yang ditampilkan? 7
    Penjumlahan dari: 0 + 1 = 1
    Penjumlahan dari: 1 + 1 = 2
    Penjumlahan dari: 1 + 2 = 3
    Penjumlahan dari: 2 + 3 = 5
    Penjumlahan dari: 3 + 5 = 8
    Penjumlahan dari: 5 + 8 = 13
    Penjumlahan dari: 8 + 13 = 21



```Java

```
