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
```

//3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas


```Java
// Ketik kode program di bawah sini
int angka;
int faktorial=1;
```

4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
for(int i=1; i<=angka; i++)
    faktorial*=i;
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);

```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 3
    Nilai faktorial bilangan tersebut adalah : 6

5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
int i=1;
while(i<=angka){
    faktorial*=i;
    i++;
}
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);

```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 5
    Nilai faktorial bilangan tersebut adalah : 120

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
int i=1;
do{
    faktorial*=i;
    i++;
}
while(i<=angka);
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);

```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 5
    Nilai faktorial bilangan tersebut adalah : 120

##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

// Ketik jawaban disini

Program diatas menggunakan operator penugasan "*=" yang merupakan operator isi dan kali  dimana berfungsi mengkali nilai faktorial dengan nilai i kemudian hasilnya dimasukan kembali ke variael faktorial dan diulang sesuai kondisi dari perulangan.


2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner in = new Scanner(System.in);
faktorial=1;
System.out.println("=====PROGRAM MENGHIUNG NILAI FAKTORIAL=====");
System.out.print("Masukkan Bilangan : ");
angka = in.nextInt();

System.out.print(angka + " Faktorial = ");
for(int i=1; i<=angka; i++){
    faktorial*=i;
    System.out.printf(i + "x");
}
System.out.printf(" = "+  faktorial);
```

    =====PROGRAM MENGHIUNG NILAI FAKTORIAL=====
    Masukkan Bilangan : 5
    5 Faktorial = 1x2x3x4x5x = 120




    java.io.PrintStream@d1decab



#### Percobaan 2 : Keluar dari perulangan menggunakan break

#### Waktu percobaan : 40 menit

1. Buatlah perulangan dengan menggunakan for yang memanfaatkan keyword break
<p align="left">
    <img width="696" height="124" src="images/for2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner in = new Scanner(System.in);
int angka, total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
for(total=0;true;){
    System.out.println("Masukkan Bilangan : ");
    angka=in.nextInt();
    total+=angka;
    if(total>50)break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : " + total);

```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 
    51
    Jumlah angka-angka yang telah dimasukkan : 51


##### 2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner in = new Scanner(System.in);
int angka, total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
total=0;
while(true){
    System.out.print("Masukkan Bilangan : ");
    angka=in.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : " + total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 5
    Masukkan Bilangan : 51
    Jumlah angka-angka yang telah dimasukkan : 56


3. Tuliskan perulangan diatas dalam struktur do-while
    <p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner in = new Scanner(System.in);
int angka, total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
total=0;
do{
    System.out.print("Masukkan Bilangan : ");
    angka=in.nextInt();
    total+=angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan : " + total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 3
    Masukkan Bilangan : 3
    Masukkan Bilangan : 50
    Jumlah angka-angka yang telah dimasukkan : 56


##### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

##### Ketik jawaban disini
Diaeal dilakukan deklarasi variabel angka dan total untuk menampung data dan Inisialisasi total = 0, pemerintah do akan dijalankan terlebih dahulu dengan memunculkan masukan bilangan. Jika angka total yang telah dimasukkan lebih > 50 maka looping akan dihentikan oleh break dan memunculkan while yang berisi angka angka yang telah dimasukkan. Jika inputan dari awal adalah > 50 maka perintah do akan sekali dijalankan tidak akan melakukan Looping. Jika tidak, <= 50 looping akan berjalan.

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


##### Jawaban
// Ketik jawaban disini

Mendeklarasikan nilai awal total bernilai benar = 0.

#### Percobaan 3 : Keluar dari step perulangan menggunakan continue

#### Waktu percobaan : 40 menit

1. Buat program looping menggunakan struktur perulangan for seperti di bawah ini: 
<p align="left">
    <img src="images/forContinue.jpg" align="left">
    </p>



```Java
// Ketik kode program di atas di bawah sini
Scanner input=new Scanner(System.in);
int angka, total, count;
double avg;
count=0;
System.out.println("===PROFRAM FOR LOOP DENGAN CONTINUE===");
for(int i=0; i<5; i++){
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    if(angka>=50) continue;
    total+=angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50 : " + total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kuran dari 50 : "+avg);
```

    ===PROFRAM FOR LOOP DENGAN CONTINUE===
    Masukkan Bilangan : 10
    Masukkan Bilangan : 10
    Masukkan Bilangan : 20
    Masukkan Bilangan : 20
    Masukkan Bilangan : 50
    Jumlah angka-angka yang kurang dari 50 : 60
    Rata-rata angka yang kuran dari 50 : 15.0



```Java
5. Jalankan program. Amati apa yang terjadi!
```

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

// Ketik jawaban disini


Percobaan 2 menggunakan steatment break dimana akan menghentikan paksa perulangan dan kode diluar perulangan akan
dieksekusi serta untuk keluar dari perulangan. Sedangkan percobaan 3 menggunakan statment continue dimana akan menghentikan sisa instruksi dalam loop, dan eksekusi loop berjalan ke tahap selanjutnya. Namun jika tidak memenuhi kondisi akan tetap melaksanakan intruksi dalam blok program itu.

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>

// Ketik jawaban disini
ketika angka memenuhi kondisi yaitu >= 50 maka akan dilakukan statment continue dimana akan menghentikan sisa instruksi dalam loop, dan eksekusi loop berjalan ke tahap selanjutnya. Namun jika tidak memenuhi kondisi akan tetap melaksanakan intruksi dalam blok program itu dimana dalam hal ini ke total+=angka; count++;.

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
Scanner in = new Scanner(System.in);

int bil, jmlBilGenap;
int totalGenap = 1;
double avg;

System.out.print("Masukkan angka: ");
bil = in.nextInt();
jmlBilGenap = bil / 2;

System.out.printf("\nBanyaknya bilangan genap dari 1 sampai %d adalah %d\n",bil,jmlBilGenap);
System.out.print("Angka genap dalam range tersebut adalah");

for(int i=1;i<=bil;i++)
{
    if(i%2!=0)continue;
    System.out.printf(" %d",i);
    totalGenap += i;
}
avg = (double) (totalGenap-1) / jmlBilGenap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d", bil, totalGenap-1);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %.1f", bil, avg);
```

    Masukkan angka: 10
    
    Banyaknya bilangan genap dari 1 sampai 10 adalah 5
    Angka genap dalam range tersebut adalah 2 4 6 8 10
    Hasil penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata-rata bilangan genap dari 1 sampai 10 adalah 6.0




    java.io.PrintStream@37c97922



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
// Ketik kode program disini
Scanner in=new Scanner(System.in);

int x, angka;

System.out.print("Masukkan angka : ");
angka = in.nextInt();

for(x=1; x<=angka; x++) {
    if (x%5==0) continue;
    System.out.println(x);
}
```

    Masukkan angka : 19
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
    16
    17
    18
    19


3. Buatlah sebuah program yang menampilkan deret bilangan fibonacci sebagai berikut. Dimana bilangan yang terletak di sebelah kanan adalah hasil penjumlahan dari 2 bilangan sebelumnya
 <p align="left">
    <img width="451" height="226" src="images/fibo.png" align="left">
    </p>



```Java
// Ketik kode program disini

int n1=0,n2=1,n3,i,count=10;    
System.out.print(n1+" "+n2);
for(i=1;i<=count;i++)   
 {    
  n3=n1+n2;    
  System.out.print(" "+n3);    
  n1=n2;    
  n2=n3;    
 }

import java.util.Scanner;
int limit, past, current, fibonacci;
Scanner input = new Scanner(System.in);
System.out.print("\n\n Masukan banyak bilangan yang mau ditampilkan: ");
limit = input.nextInt();
past = 1;
current = 1;
fibonacci = 1;
for (int i =1; i <= limit; i++){
    System.out.printf("Sum of: %d + %d = %d\n",past,current,fibonacci);
    fibonacci = past + current;
    past = current;
    current = fibonacci;
}
```

    0 1 1 2 3 5 8 13 21 34 55 89
    Masukan banyak bilangan yang mau ditampilkan: 10
    Sum of: 1 + 1 = 1
    Sum of: 1 + 2 = 2
    Sum of: 2 + 3 = 3
    Sum of: 3 + 5 = 5
    Sum of: 5 + 8 = 8
    Sum of: 8 + 13 = 13
    Sum of: 13 + 21 = 21
    Sum of: 21 + 34 = 34
    Sum of: 34 + 55 = 55
    Sum of: 55 + 89 = 89



```Java

```
