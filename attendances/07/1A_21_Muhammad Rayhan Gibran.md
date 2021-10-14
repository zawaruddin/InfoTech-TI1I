## JOBSHEET 7

## PERULANGAN 1

### Tujuan

Mahasiswa mampu menyelesaikan permasalahan/studi kasus menggunakan sintaks perulangan 1 dan mengimplemantasikannya dalam bahasa pemrogaman java.

### Alat dan Bahan

- PC/laptop
- Browser(chrome, firefox, safari)
- Koneksi internet

### Praktikum

#### Percobaan 1 : Penggunaan for, while dan do-while

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart perulangan for dibawah ini!

<p align="left">
<img width="197" height="259" src="images/flowchartFaktorial.png">
</p>

> Flowchart diatas digunakan untuk menghitung nilai faktorial, selanjutnya kita akan membuat programnya berdasarkan
> flowchart di atas !

2. Tambahkan library Scanner, deklarasi Scanner, dan buat variabel angka untuk menampung data yang diinput melalui keyboard

```Java
// No.2
import java.util.Scanner;
Scanner input = new Scanner (System.in);
int i, angka, faktorial=1;
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
```

    Masukkan Bilangan : 5

> Program diatas untuk menambahkan library Scanner, deklarasi Scanner, dan membuat variabel angka untuk menampung data yang diinput melalui keyboard

3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas

```Java
// No.3
import java.util.Scanner;
Scanner input = new Scanner (System.in);
int i, angka, faktorial=1;
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
for (i=1; i<=angka; i++){}
```

    Masukkan Bilangan : 5

> Program diatas untuk Membuat deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas

4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for

<p align="left">
<img width="696" height="124" src="images/for.jpg" align="left">
</p>

```Java
import java.util.Scanner;
int angka, faktorial =1;
Scanner input = new Scanner (System.in);


System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();

for (i=1; i<=angka; i++)    {
    faktorial *= i;
}
System.out.print("Nilai faktorial bilanga tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 5
    Nilai faktorial bilanga tersebut adalah : 120

> Program diatas untuk menghitung nilai faktorial dengan for

5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan

<p align="left">
<img width="696" height="124" src="images/while.jpg" align="left">
</p>

```Java
//No.5
import java.util.Scanner;
Scanner input = new Scanner (System.in);
int i, angka, faktorial=1;

System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
int i=1;
while(i<=angka){
    faktorial*=i;
    i++;
}
System.out.print("Nilai faktorial bilanga tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan : 5
    Nilai faktorial bilanga tersebut adalah : 120

> Program diatas untuk menghitung nilai faktorial dengan While

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan

<p align="left">
<img width="696" height="124" src="images/dowhile.jpg" align="left">
</p>

```Java
//No.6
import java.util.Scanner;
Scanner input = new Scanner (System.in);
int i, angka, faktorial=1;

System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
int i=1;
do{
    faktorial*=i;
    i++;
}
while(i<=angka);
System.out.print("Nilai faktorial bilanga tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan : 5
    Nilai faktorial bilanga tersebut adalah : 120

> Program diatas untuk menghitung nilai faktorial dengan Do While

##### Pertanyaan

1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

> Shortcut dari "Faktorial = faktorial \* i"

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>

```Java
//No.2
import java.util.Scanner;
Scanner input = new Scanner (System.in);
int i, angka, faktorial=1;

System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
System.out.print(angka + "Faktorial = 1");

for (i=2; i<=angka; i++)    {
    faktorial *= i;
    System.out.printf("x%d",i);
}
System.out.print(" = "+faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan :
    5
    5Faktorial = 1x2x3x4x5 = 120

> Program diatas untuk membuat program seperti gambar

#### Percobaan 2 : Keluar dari perulangan menggunakan break

#### Waktu percobaan : 40 menit

1. Buatlah perulangan dengan menggunakan for yang memanfaatkan keyword break
<p align="left">
    <img width="696" height="124" src="images/for2.jpg" align="left">
    </p>

```Java
//No.1
int angka, total;
System.out.println("===PROGRAM FOR LOOP PDENGAN BREAK===");
for(total=0;true;){
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM FOR LOOP PDENGAN BREAK===
    Masukkan Bilangan : 54
    Jumlah angka-angka yang telah dimasukkan : 54

2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>

```Java
//No.2
Scanner input=new Scanner(System.in);
int angka, total;
System.out.println("===PROGRAM WHILE LOOP PDENGAN BREAK===");
total=0;
while(true){
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM WHILE LOOP PDENGAN BREAK===
    Masukkan Bilangan : 54
    Jumlah angka-angka yang telah dimasukkan : 54

3. Tuliskan perulangan diatas dalam struktur do-while
<p align="left">
<img width="696" height="124" src="images/dowhile2.jpg" align="left">
</p>

```Java
//No.3
Scanner input=new Scanner(System.in);
int angka, total;
System.out.println("===PROGRAM DO-WHILE LOOP PDENGAN BREAK===");
total=0;
do
{
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM DO-WHILE LOOP PDENGAN BREAK===
    Masukkan Bilangan : 5
    Masukkan Bilangan : 54
    Jumlah angka-angka yang telah dimasukkan : 59

##### Pertanyaan

1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

> Kode program tersebut memiliki fungsi untuk keluar dari perulangan sintaks, jika suatu syarat sudah terpenuhi menggunakan "break", jika semua bilangan yang dimasukkan, dijumlah lebih dari 50 maka perulangan selesai.

2. Jelaskan fungsi kode berikut!
<p align="left">
<img src="images/forPertanyaan2.jpg" align="left">
</p>

> kode tersebut memilki arti variabel total dimulai dari 0, dan loop terus berjalan hingga dihentikan

#### Percobaan 3 : Keluar dari step perulangan menggunakan continue

#### Waktu percobaan : 40 menit

1. Buat program looping menggunakan struktur perulangan for seperti di bawah ini:
<p align="left">
    <img src="images/forContinue.jpg" align="left">
    </p>

```Java
Scanner input=new Scanner(System.in);
int angka, total, count;
double avg;
count=0;

System.out.println("===PROGRAM for LOOP DENGAN CONTINUE===");
for(int i=0;i<5;i++){
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    if(angka>=50) continue;
    total+=angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50: "+total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50: "+avg);
```

    ===PROGRAM for LOOP DENGAN CONTINUE===
    Masukkan Bilangan : 54
    Masukkan Bilangan : 54
    Masukkan Bilangan : 33
    Masukkan Bilangan : 33
    Masukkan Bilangan : 33
    Jumlah angka-angka yang kurang dari 50: 99
    Rata-rata angka yang kurang dari 50: 33.0

5. Jalankan program. Amati apa yang terjadi!

> Yang terjadi adalah jika angka yang dimasukkan lebih dari sama dengan 50 maka angka tidak akan diproses di program selanjutnya.

##### Pertanyaan

1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

> percobaan 2 memberhentikan perulangan dengan break jika syarat sudah terpenuhi sedangkan percobaan 3 menggunkan continue yang digunakan untuk memberhentikan perulangan 1 kali saja dan memulai kembali dari awal jika syarat terpenuhi.

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>

> Fungsi dari perintah kode tersebut adalah jika angka yang dimasukkan lebih dari samadengan 50 maka akan diskip atau tidak tidak diproses di kode program dibawahnya. atau kode tersebut digunakan untuk memberhentikan perulangan 1 kali saja di tengah jika syarat terpenuhi.

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program yang meminta masukan user sebuah bilangan bulat N (N > 0). Program kemudian menampilkan penjumlahan N bilangan genap positif pertama (bilangan genap ≥ 0).
   Contoh:
   • Jika user memasukkan N = 10, program akan menghitung banyaknya jumlah bilangan positive di dalam range bilangan 1-10 kemudian menampilkan penjumlahan bilangan positive bilangan bilangan diantara 1-10 yaitu :
   0 + 2 + 4 + 6 + 10 = 30.
   Setelah itu program akan menampilkan rata-rata dari bilangan positive yang telah dijumlahkan tadi.
   • Contoh output program dan flowchart
   <br/><img width="303" height="529" src="images/hasilTugasFc.jpg" align="left"><br/>

<br/><img width="303" height="529" src="images/fcTugasJS7.png" align="left">

```Java
Scanner input=new Scanner(System.in);
int bil, jmlBilGenap, totalGenap=0;
double avg;

System.out.print("Masukkan Bilangan : ");
bil=input.nextInt();
jmlBilGenap=(bil/2);
System.out.printf("Banyaknya bilangan genap dari angka 1 sampai %d adalah %d\n",bil,jmlBilGenap);
System.out.printf("Angka genap dari angka 1 sampai %d adalah ",bil);
for(int i=1;i<=bil;i++){
    if(i%2!=0) continue;
    System.out.printf("%d,",i);
    totalGenap+=i;
}
avg=(double)totalGenap/jmlBilGenap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bil,totalGenap);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %1.1f",bil,avg);
```

    Masukkan Bilangan : 10
    Banyaknya bilangan genap dari angka 1 sampai 10 adalah 5
    Angka genap dari angka 1 sampai 10 adalah 2,4,6,8,10,
    Hasil penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata-rata bilangan genap dari 1 sampai 10 adalah 6.0




    java.io.PrintStream@685922f

> Program untuk menmpilkan flowchart diatas

2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>

> program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5.

```Java
Scanner input=new Scanner(System.in);
int angka;

System.out.print("Masukkan Angka : ");
angka=input.nextInt();

for(int i=0;i<angka;i++){
    if(i%5==0) continue;
    System.out.println(i);
}
```

    Masukkan Angka : 10
    1
    2
    3
    4
    6
    7
    8
    9

3. Buatlah sebuah program yang menampilkan deret bilangan fibonacci sebagai berikut. Dimana bilangan yang terletak di sebelah kanan adalah hasil penjumlahan dari 2 bilangan sebelumnya
<p align="left">
   <img width="451" height="226" src="images/fibo.png" align="left">
   </p>

```Java
Scanner input=new Scanner(System.in);
int angka,f=0,f2=1,fib,i;

System.out.print("Masukkan bilangan yang ditampilkan : ");
angka=input.nextInt();

for(i=0;i<angka;i++){
    fib = f + f2;
    System.out.printf("\nSum of: %d + %d = %d",f,f2,fib);
    f = f2;
    f2 = fib;
}
```

    Masukkan bilangan yang ditampilkan : 10

    Sum of: 0 + 1 = 1
    Sum of: 1 + 1 = 2
    Sum of: 1 + 2 = 3
    Sum of: 2 + 3 = 5
    Sum of: 3 + 5 = 8
    Sum of: 5 + 8 = 13
    Sum of: 8 + 13 = 21
    Sum of: 13 + 21 = 34
    Sum of: 21 + 34 = 55
    Sum of: 34 + 55 = 89

> program untuk menampilkan deret bilangan fibonacci
