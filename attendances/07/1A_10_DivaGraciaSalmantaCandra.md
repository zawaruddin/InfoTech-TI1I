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
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
for(int i=1; i <= angka; i++)
    faktorial *= i;
System.out.print("Nilai faktorial bilangan tersebut adalah : "+ faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 5
    Nilai faktorial bilangan tersebut adalah : 120

5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
int i=1;
while(i<=angka){
    faktorial*=i;
    i++;
}
System.out.print("Nilai faktorial bilangan tersebut adalah : "+ faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan : 5
    Nilai faktorial bilangan tersebut adalah : 120

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial=1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
int i=1;
do{
    faktorial*=i;
    i++;
}
while(i<=angka);
System.out.print("Nilai faktorial bilangan tersebut adalah : "+ faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan : 5
    Nilai faktorial bilangan tersebut adalah : 120

##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

JAWAB
1. Sintaks faktorial*=i; merupakan rumus untuk menghitung variabel faktorial yaitu faktorial(1) dikali i


2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
Scanner input = new Scanner(System.in);
int angka;
int faktorial=1;
String fakt = "";
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();
for(int i=1; i <= angka; i++){
    faktorial *= i;
    fakt = fakt.concat("x"+i);
}   
System.out.printf("%dFaktorial = ",angka);
System.out.printf(fakt.substring(1, fakt.length()));
System.out.printf(" = %d", faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL=====
    Masukkan Bilangan : 5
    5Faktorial = 1x2x3x4x5 = 120




    java.io.PrintStream@25d8a3f8



#### Percobaan 2 : Keluar dari perulangan menggunakan break

#### Waktu percobaan : 40 menit

1. Buatlah perulangan dengan menggunakan for yang memanfaatkan keyword break
<p align="left">
    <img width="696" height="124" src="images/for2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
Scanner input=new Scanner(System.in);
int angka, total;
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
    Masukkan Bilangan : 25
    Masukkan Bilangan : 15
    Masukkan Bilangan : 20
    Jumlah angka-angka yang telah dimasukkan : 60


2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka, total;
System.out.println("===PROGRAM WHILE LOOP DENGAN BREAK===");
total=0;
while(true){
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    total+=angka;
    if(total>50)break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 35
    Masukkan Bilangan : 55
    Jumlah angka-angka yang telah dimasukkan : 90


3. Tuliskan perulangan diatas dalam struktur do-while
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
    total+=angka;
    if(total>50)break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM DO-WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 45
    Masukkan Bilangan : 15
    Jumlah angka-angka yang telah dimasukkan : 60


##### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

JAWAB
1. Kode program di atas berfungsi untuk menghasilkan output perulangan dan akan keluar dari loop jika syarat break bernilai true. Sebelum dilakukan perulangan, variabel total diberi nilai 0. Perulangan akan dilakukan selama bernilai true. Angka-angka yang telah diinput akan dijumlah dan masuk ke dalam variabel total. Jika variabel total lebih dari 50, program akan berhenti melakukan perulangan dan mencetak tulisan "Jumlah angka-angka yang telah dimasukkan : " beserta nilai dalam variabel total.

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


JAWAB 

2. Kode for(total=0;true;){ memiliki arti sebelum dilakukan perulangan, variabel total bernilai 0 dan perulangan akan dilakukan selama true

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
System.out.println("===PROGRAM LOOP DENGAN CONTINUE===");
for(int i=0; i<5; i++){
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    if(angka>=50) continue;
    total+=angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50: "+total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50: "+avg);
```

    ===PROGRAM LOOP DENGAN CONTINUE===
    Masukkan Bilangan : 25
    Masukkan Bilangan : 55
    Masukkan Bilangan : 30
    Masukkan Bilangan : 15
    Masukkan Bilangan : 45
    Jumlah angka-angka yang kurang dari 50: 115
    Rata-rata angka yang kurang dari 50: 28.75



```Java
5. Jalankan program. Amati apa yang terjadi!
```

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

JAWAB

1. Percobaan 2 merupakan penggunaan statement break yang berguna untuk menghentikan atau keluar dari perulangan. Percobaan 3 merupakan penggunaan statement continue yang berguna untuk melewati 1 iterasi kemudian melanjutkan kembali perulangan iterasi berikutnya.

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>

JAWAB

2. Kode program tersebut berfungsi untuk melewati perulangan jika angka yang diinput lebih dari sama dengan 50 kemudian melanjutkan perulangan kembali. total+=angka berarti nilai dari variabel total adalah hasil penjumlahan angka-angka yang telah diinput. count++ berarti menambahkan 1 nilai pada variabel count

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
Scanner input=new Scanner(System.in);
int i, bil, jmlBilGenap, totalGenap=0;
double avg;
String genap = "";

System.out.print("Masukkan angka : ");
bil = input.nextInt();
jmlBilGenap = bil/2;
System.out.println("Banyaknya bilangan genap dari 1 sampai " +bil + " adalah " + jmlBilGenap);
for(int i=1; i<=bil; i++){
   if(i%2!=0) continue;
    totalGenap+=i;
    avg=totalGenap/jmlBilGenap;
    genap = genap.concat(", "+i);
}
System.out.printf("Angka genap dalam range tersebut adalah");
System.out.printf(genap.substring(0, genap.length()));
System.out.println('\n'+"Hasil penjumlahan bilangan genap dari 1 sampai "+bil +" adalah "+ totalGenap);
System.out.println("Rata-rata bilangan dari 1 sampai "+bil+" adalah "+ avg);

```

    Masukkan angka : 10
    Banyaknya bilangan genap dari 1 sampai 10 adalah 5
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10
    Hasil penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata-rata bilangan dari 1 sampai 10 adalah 6.0


2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
// Ketik kode program disini
for (int x=1; x<=20; x++){
    if (x%5==0) continue;
    System.out.println(x);
}
```

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
int count = 12, bil1 = 0, bil2 = 1;
for (int i = 1; i <= count; ++i){
            System.out.print(bil1+" ");
            int jumlah = bil1 + bil2;
            bil1 = bil2;
            bil2 = jumlah;
}
```

    0 1 1 2 3 5 8 13 21 34 55 89 
