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
import java.util.Scanner;
```


```Java
3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas
```


```Java
Scanner in = new Scanner(System.in);
int angka, faktorial = 1; 
```

4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = in.nextInt();
for(int i=1; i <= angka; i++) {
faktorial *=i;
System.out.printf("nilai i = %d adalah %d\n", i, faktorial);
}
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial); 
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 50
    nilai i = 1 adalah 0
    nilai i = 2 adalah 0
    nilai i = 3 adalah 0
    nilai i = 4 adalah 0
    nilai i = 5 adalah 0
    nilai i = 6 adalah 0
    nilai i = 7 adalah 0
    nilai i = 8 adalah 0
    nilai i = 9 adalah 0
    nilai i = 10 adalah 0
    nilai i = 11 adalah 0
    nilai i = 12 adalah 0
    nilai i = 13 adalah 0
    nilai i = 14 adalah 0
    nilai i = 15 adalah 0
    nilai i = 16 adalah 0
    nilai i = 17 adalah 0
    nilai i = 18 adalah 0
    nilai i = 19 adalah 0
    nilai i = 20 adalah 0
    nilai i = 21 adalah 0
    nilai i = 22 adalah 0
    nilai i = 23 adalah 0
    nilai i = 24 adalah 0
    nilai i = 25 adalah 0
    nilai i = 26 adalah 0
    nilai i = 27 adalah 0
    nilai i = 28 adalah 0
    nilai i = 29 adalah 0
    nilai i = 30 adalah 0
    nilai i = 31 adalah 0
    nilai i = 32 adalah 0
    nilai i = 33 adalah 0
    nilai i = 34 adalah 0
    nilai i = 35 adalah 0
    nilai i = 36 adalah 0
    nilai i = 37 adalah 0
    nilai i = 38 adalah 0
    nilai i = 39 adalah 0
    nilai i = 40 adalah 0
    nilai i = 41 adalah 0
    nilai i = 42 adalah 0
    nilai i = 43 adalah 0
    nilai i = 44 adalah 0
    nilai i = 45 adalah 0
    nilai i = 46 adalah 0
    nilai i = 47 adalah 0
    nilai i = 48 adalah 0
    nilai i = 49 adalah 0
    nilai i = 50 adalah 0
    Nilai faktorial bilangan tersebut adalah : 0

5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
faktorial = 1;
int i = 1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = in.nextInt();
while(i <= angka) {
faktorial *=i; i++;
    System.out.printf("nilai i = %d adalah %d\n", i, faktorial);
}
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 60
    nilai i = 2 adalah 1
    nilai i = 3 adalah 2
    nilai i = 4 adalah 6
    nilai i = 5 adalah 24
    nilai i = 6 adalah 120
    nilai i = 7 adalah 720
    nilai i = 8 adalah 5040
    nilai i = 9 adalah 40320
    nilai i = 10 adalah 362880
    nilai i = 11 adalah 3628800
    nilai i = 12 adalah 39916800
    nilai i = 13 adalah 479001600
    nilai i = 14 adalah 1932053504
    nilai i = 15 adalah 1278945280
    nilai i = 16 adalah 2004310016
    nilai i = 17 adalah 2004189184
    nilai i = 18 adalah -288522240
    nilai i = 19 adalah -898433024
    nilai i = 20 adalah 109641728
    nilai i = 21 adalah -2102132736
    nilai i = 22 adalah -1195114496
    nilai i = 23 adalah -522715136
    nilai i = 24 adalah 862453760
    nilai i = 25 adalah -775946240
    nilai i = 26 adalah 2076180480
    nilai i = 27 adalah -1853882368
    nilai i = 28 adalah 1484783616
    nilai i = 29 adalah -1375731712
    nilai i = 30 adalah -1241513984
    nilai i = 31 adalah 1409286144
    nilai i = 32 adalah 738197504
    nilai i = 33 adalah -2147483648
    nilai i = 34 adalah -2147483648
    nilai i = 35 adalah 0
    nilai i = 36 adalah 0
    nilai i = 37 adalah 0
    nilai i = 38 adalah 0
    nilai i = 39 adalah 0
    nilai i = 40 adalah 0
    nilai i = 41 adalah 0
    nilai i = 42 adalah 0
    nilai i = 43 adalah 0
    nilai i = 44 adalah 0
    nilai i = 45 adalah 0
    nilai i = 46 adalah 0
    nilai i = 47 adalah 0
    nilai i = 48 adalah 0
    nilai i = 49 adalah 0
    nilai i = 50 adalah 0
    nilai i = 51 adalah 0
    nilai i = 52 adalah 0
    nilai i = 53 adalah 0
    nilai i = 54 adalah 0
    nilai i = 55 adalah 0
    nilai i = 56 adalah 0
    nilai i = 57 adalah 0
    nilai i = 58 adalah 0
    nilai i = 59 adalah 0
    nilai i = 60 adalah 0
    nilai i = 61 adalah 0
    Nilai faktorial bilangan tersebut adalah : 0

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
faktorial = 1;
int i = 1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = in.nextInt();
do{    
    faktorial *=i; i++;
    System.out.printf("nilai i = %d adalah %d\n", i, faktorial);
}
while(i <= angka);
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 40
    nilai i = 2 adalah 1
    nilai i = 3 adalah 2
    nilai i = 4 adalah 6
    nilai i = 5 adalah 24
    nilai i = 6 adalah 120
    nilai i = 7 adalah 720
    nilai i = 8 adalah 5040
    nilai i = 9 adalah 40320
    nilai i = 10 adalah 362880
    nilai i = 11 adalah 3628800
    nilai i = 12 adalah 39916800
    nilai i = 13 adalah 479001600
    nilai i = 14 adalah 1932053504
    nilai i = 15 adalah 1278945280
    nilai i = 16 adalah 2004310016
    nilai i = 17 adalah 2004189184
    nilai i = 18 adalah -288522240
    nilai i = 19 adalah -898433024
    nilai i = 20 adalah 109641728
    nilai i = 21 adalah -2102132736
    nilai i = 22 adalah -1195114496
    nilai i = 23 adalah -522715136
    nilai i = 24 adalah 862453760
    nilai i = 25 adalah -775946240
    nilai i = 26 adalah 2076180480
    nilai i = 27 adalah -1853882368
    nilai i = 28 adalah 1484783616
    nilai i = 29 adalah -1375731712
    nilai i = 30 adalah -1241513984
    nilai i = 31 adalah 1409286144
    nilai i = 32 adalah 738197504
    nilai i = 33 adalah -2147483648
    nilai i = 34 adalah -2147483648
    nilai i = 35 adalah 0
    nilai i = 36 adalah 0
    nilai i = 37 adalah 0
    nilai i = 38 adalah 0
    nilai i = 39 adalah 0
    nilai i = 40 adalah 0
    nilai i = 41 adalah 0
    Nilai faktorial bilangan tersebut adalah : 0

##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>


```Java
ekuivalen dengan faktorial = faktorial * i;
```

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
faktorial = 1;
int i = 1;
String fmt = "";
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = in.nextInt();

for(int i=1; i <= angka; i++) {
    faktorial *=i;
    fmt = fmt.concat("x" + i);
};
System.out.printf("%dFaktorial = ", angka);
System.out.printf(fmt.substring(1, fmt.length()));
System.out.printf(" = %d", faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 10
    10Faktorial = 1x2x3x4x5x6x7x8x9x10 = 3628800




    java.io.PrintStream@6d136760



#### Percobaan 2 : Keluar dari perulangan menggunakan break

#### Waktu percobaan : 40 menit

1. Buatlah perulangan dengan menggunakan for yang memanfaatkan keyword break
<p align="left">
    <img width="696" height="124" src="images/for2.jpg" align="left">
    </p>


```Java
Scanner input=new Scanner(System.in);
int angka,total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
for(total=0;true;){
System.out.print("Masukkan Bilangan : ");
angka=input.nextInt();
total+=angka;
if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 20
    Masukkan Bilangan : 30
    Masukkan Bilangan : 40
    Jumlah angka-angka yang telah dimasukkan : 90


2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
int angka,total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
while(true){
System.out.print("Masukkan Bilangan : ");
angka=input.nextInt();
total+=angka;
if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 50
    Masukkan Bilangan : 60
    Jumlah angka-angka yang telah dimasukkan : 110


3. Tuliskan perulangan diatas dalam struktur do-while
    <p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
int angka,total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
total = 0;
do {
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 40
    Masukkan Bilangan : 30
    Jumlah angka-angka yang telah dimasukkan : 70


##### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!


```Java
int angka,total; // Deklarasi variabel angka, total
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK==="); // Output header
total = 0; // Assignment variabel total
do { // kode blok program yang akan dijalankan
    System.out.print("Masukkan Bilangan : "); // Output label input
    angka=input.nextInt(); // Assignment variabel angka berdasarkan input
    total+=angka; // Assignment variabel total dengan penjumlahan total dengan angka
    if(total>50) break; // Jika nilai total lebih dari 50 maka perulangan akan berhenti
}
while(true); // Perulangan tak terhenti, dikarenakan kondisi bernilai konstanta true
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total); // Output Total
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 60
    Jumlah angka-angka yang telah dimasukkan : 60


2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


fungsinya adalah jika ekspresi ke dua bernilai true, maka program akan dijalankan berulang kali tanpa jeda

#### Percobaan 3 : Keluar dari step perulangan menggunakan continue

#### Waktu percobaan : 40 menit

1. Buat program looping menggunakan struktur perulangan for seperti di bawah ini: 
<p align="left">
    <img src="images/forContinue.jpg" align="left">
    </p>



```Java
Scanner input = new Scanner(System.in);
int angka, total, count;
double avg;
count = 0;
System.out.println("===PROGRAM FOR LOOP DENGAN CONTINUE===");
for(int i=0;i<5;i++){
System.out.print("Masukkan Bilangan : ");
angka=input.nextInt();
System.out.println(total);
if(angka>=50) continue;
total+=angka;
count++;
System.out.println(total);
}
System.out.println("Jumlah angka-angka yang kurang dari 50: "+total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50: "+avg);
```

    ===PROGRAM FOR LOOP DENGAN CONTINUE===
    Masukkan Bilangan : 55
    0
    Masukkan Bilangan : 40
    0
    40
    Masukkan Bilangan : 32
    40
    72
    Masukkan Bilangan : 10
    72
    82
    Masukkan Bilangan : 20
    82
    102
    Jumlah angka-angka yang kurang dari 50: 102
    Rata-rata angka yang kurang dari 50: 25.5



```Java
5. Jalankan program. Amati apa yang terjadi!
```

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

- Percobaan 2
Menggunakan break sebagai pemberhenti loop
- Percobaan 3
enggunakan continue yang berfungsi untuk melewati kode program jika suatu kondisi terpenuhi

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>

- if(angka>=50) continue;
Jika angka lebih dari sama dengan 50 maka proses perulangan pada saat itu juga akan langsung kembali
mulai dari awal baris program perulangan.
- total+=angka; count++;
variabel total ditambah dengan variabel angka, 
lalu pada variabel count akan terjadi increment

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
import java.util.Scanner;
Scanner in = new Scanner(System.in);
int bil, jmlBilGenap, totalGenap = 1;
double avg;

System.out.print("Masukkan angka: ");
bil = in.nextInt();
jmlBilGenap = bil/2;
System.out.printf("Jumlah Bilangan Genap dari 1 sampai %d adalah ", jmlBilGenap);

System.out.print("\nAngka genap dalam range tersebut adalah");
for(int i = 1; i <= bil; i++) {
    if(i % 2 != 0) continue;
    System.out.printf(", %d", i);
    totalGenap += i;
}
avg= totalGenap/jmlBilGenap;
System.out.printf("\nHasil Penjumlahan bilangan genap dari 1 sampai %d adalah %d\n", bil, totalGenap -1);
System.out.printf("Rata-rata bilangan genap dari 1 sampai %d adalah %.1f\n", bil, avg);
```

    Masukkan angka: 10
    Jumlah Bilangan Genap dari 1 sampai 5 adalah 
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10
    Hasil Penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata-rata bilangan genap dari 1 sampai 10 adalah 6.0





    java.io.PrintStream@6d136760



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
import java.util.Scanner;
Scanner in = new Scanner(System.in);
int i = 1;
int angka = in.nextInt();

for(;i < angka;) {
    if(i % 5 == 0) continue;
    System.out.println(i);
    i++;
}
```

    15
    1
    2
    3
    4


3. Buatlah sebuah program yang menampilkan deret bilangan fibonacci sebagai berikut. Dimana bilangan yang terletak di sebelah kanan adalah hasil penjumlahan dari 2 bilangan sebelumnya
 <p align="left">
    <img width="451" height="226" src="images/fibo.png" align="left">
    </p>



```Java
// Ketik kode program disini
```
