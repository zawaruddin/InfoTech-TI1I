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
//membuat variabel
int angka, faktorial = 1;
// scanner menggunakan input
Scanner input = new Scanner(System.in);
```

3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas


```Java
// Ketik kode program di bawah sini
System.out.print("Input angka: ");
angka = input.nextInt();
for(int i = 1; i<= angka; i++){
    faktorial = faktorial *=i;
    System.out.printf("i = %d hasilnya Ialah %d\n",i, faktorial,angka);
}
System.out.println("Hasilnya ialah " + faktorial");
```

    Input angka: i = 1 hasilnya Ialah 1
    i = 2 hasilnya Ialah 2



    |   System.out.println("Hasilnya ialah " + faktorial");

    unclosed string literal

    


    3


4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
System.out.println("====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
for(int i=1; i<=angka; i++)
    faktorial*=i;
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);
```

5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE====");
System.out.print("Masukkan Bilangan : ");
angka= input.nextInt();
int i=1;
while(i<=angka){
    faktorial*=i;
    i++;
}
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);
```

    ====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE====
    Masukkan Bilangan : 12
    Nilai faktorial bilangan tersebut adalah : 479001600

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN DO-WHILE====");
System.out.print("Masukkan Bilangan: ");
angka = input.nextInt();
int i=1;
do{
    faktorial*=i;
    i++;
}
while(i<=angka);
System.out.print("Nilai Faktorial bilangan tersebut Ialah : " + faktorial);
```

    ====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN DO-WHILE====
    Masukkan Bilangan: 12
    Nilai Faktorial bilangan tersebut Ialah : 479001600

##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

// Ketik jawaban disini

Kegunaan baris faktorial*=i; adalah digunakan untuk memnghitung faktorial dikali(*) i 

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("=====PROGRAM MENGHIUNG NILAI FAKTORIAL=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();

System.out.print(angka + "Faktorial = ");
for(int i=1; i<=angka; i++){
    faktorial*=i;
    System.out.printf(i + "x");
}
System.out.printf(" = "+faktorial);

```


    |   faktorial=1;

    cannot find symbol

      symbol:   variable faktorial

    


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
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    total += angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : " + total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Jumlah angka-angka yang telah dimasukkan : 60


## 2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka,total;
System.out.println("===PROGRAM WHILE LOOP DENGAN BREA===");
total = 0;
while(true){
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    total += angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : " +total);
```

    ===PROGRAM WHILE LOOP DENGAN BREA===
    Masukkan Bilangan : 23
    Masukkan Bilangan : 23
    Masukkan Bilangan : 23
    Jumlah angka-angka yang telah dimasukkan : 69


### 3. Tuliskan perulangan diatas dalam struktur do-while
<p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka, total;
System.out.println("===PROGRAM DO-WHILE LOOP DENGAN BREAK===");
total=0;
do
{
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    total += angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan : " +total);
```

    ===PROGRAM DO-WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Masukkan Bilangan : 12
    Jumlah angka-angka yang telah dimasukkan : 60


## Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

// Ketik jawaban disini


melakukan pengulangan dan menambahkan nilai sesuai dengan yang ditentukan

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


// Ketik jawaban disini

untuk total 0, jika true maka akan melanjutkan yang dibawah 

#### Percobaan 3 : Keluar dari step perulangan menggunakan continue

#### Waktu percobaan : 40 menit

1. Buat program looping menggunakan struktur perulangan for seperti di bawah ini: 
<p align="left">
    <img src="images/forContinue.jpg" align="left">
    </p>



```Java
// Ketik kode program di atas di bawah sini
Scanner input = new Scanner(System.in);
int angka, total, count;
double avg;
count=0;
System.out.println("===PROGRAM FOR LOOP DENGAN CONTINUE===");
for(int i=0;i<5;i++){
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    if(angka>=50) continue;
    total += angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50: "+total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50: "+avg);
```

    ===PROGRAM FOR LOOP DENGAN CONTINUE===
    Masukkan Bilangan : 12
    Masukkan Bilangan : 13
    Masukkan Bilangan : 14
    Masukkan Bilangan : 15
    Masukkan Bilangan : 16
    Jumlah angka-angka yang kurang dari 50: 70
    Rata-rata angka yang kurang dari 50: 14.0


5. Jalankan program. Amati apa yang terjadi!
    

    ===PROGRAM FOR LOOP DENGAN CONTINUE===
Masukkan Bilangan : 12
Masukkan Bilangan : 13
Masukkan Bilangan : 14
Masukkan Bilangan : 15
Masukkan Bilangan : 16
Jumlah angka-angka yang kurang dari 50: 70
Rata-rata angka yang kurang dari 50: 14.0

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

// Ketik jawaban disini



percobaan kedua menggunakan break

jika telah mencapai angka 50 maka akan break


jika percobaan ketiga menggunakan continue

kita diharuskan untuk menginput bilangan sebanyak 5x

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>

// Ketik jawaban disini



jika angka lebih dari sama dengan 50 maka lanjut 
lalu simbol += memiliki arti pengisian dan penambahan anka
fungsi count menghitung jumlah data


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
import java.util.Scanner;
Scanner input = new Scanner(System.in);

//variabel
int bilangan, jumlahBilGenap, totalGenap = 1;
double avg;

System.out.print("Masukkan angka: ");
bilangan = input.nextInt();
jumlahBilGenap = bilangan/2;

System.out.printf("Banyaknya bilangan genap dari 1 sampai %d adalah %d\n",bilangan,jumlahBilGenap);
System.out.print("Angka genap dalam range tersebut adalah");
for(int i=1; i<=bilangan; i++)
{
    if(i%2!=0)continue;
    System.out.printf(" , %d",i);
    totalGenap += i;
}
avg = (double)(totalGenap-1) / jumlahBilGenap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bilangan,totalGenap-1);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %.1f",bilangan,avg);
```

    Masukkan angka: 60
    Banyaknya bilangan genap dari 1 sampai 60 adalah 30
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60
    Hasil penjumlahan bilangan genap dari 1 sampai 60 adalah 930
    Rata-rata bilangan genap dari 1 sampai 60 adalah 31.0




    java.io.PrintStream@187bb48e



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
// Ketik kode program disini
import java.util.Scanner;
Scanner Import = new Scanner(System.in);

int x;
for(x=1; x<=19; x++){
    if(x%5==0)continue;
    System.out.print(x);
}
```

    123467891112131416171819

3. Buatlah sebuah program yang menampilkan deret bilangan fibonacci sebagai berikut. Dimana bilangan yang terletak di sebelah kanan adalah hasil penjumlahan dari 2 bilangan sebelumnya
 <p align="left">
    <img width="451" height="226" src="images/fibo.png" align="left">
    </p>



```Java
// Ketik kode program disini
import java.util.Scanner;
    int batas, A, B, C;
    Scanner input = new Scanner(System.in);
    System.out.print("Masukkan Bilangan: ");
    batas = input.nextInt();
    A = 1;
    B = 1;
    C = 1;
    for(int i=1; i<=limit;i++){
        System.out.printf("Sum of: %d + %d = %d\n",A,B,C);
        C = A + B;
        A = B;
        B = C;
    }
    
```

    Masukkan Bilangan: 10
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


```Java

```
