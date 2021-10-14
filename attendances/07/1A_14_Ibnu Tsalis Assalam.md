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
int faktorial = 1;
```

4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan: ");
angka = input.nextInt();
for(int i=1; i<=angka; i++)
    faktorial *= i;
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan: 7
    Nilai faktorial bilangan tersebut adalah : 5040

5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial = 1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====");
System.out.print("Masukkan Bilangan: ");
angka = input.nextInt();
int i=1;
while(i<=angka)
{
    faktorial *= i;
    i++;
}
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan: 6
    Nilai faktorial bilangan tersebut adalah : 720

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial = 1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN DO-WHILE=====");
System.out.print("Masukkan Bilangan: ");
angka = input.nextInt();
int i=1;
do{
    faktorial *= i;
    i++;
}
while(i<=angka);
System.out.print("Nilai faktorial bilangan tersebut adalah : " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN DO-WHILE=====
    Masukkan Bilangan: 5
    Nilai faktorial bilangan tersebut adalah : 120

##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
    
    <p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

//Ketik jawaban disini
>Mengkali faktorial dengan i secara berulang

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
    
    <p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial = 1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan: ");
angka = input.nextInt();
System.out.print(angka + "Faktorial = 1");
for(int i=2; i<=angka; i++)//i dimulai dengan 2 karena 1 sudah tertulis
{
    faktorial *= i;
    System.out.printf("x%d",i);
}
System.out.print(" = " + faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan: 5
    5Faktorial = 1x2x3x4x5 = 120

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
for(total=0;true;)
{
    System.out.print("Masukkan Bilangan: ");
    angka = input.nextInt();
    total += angka;
    if(total>50)break;
}
System.out.print("Jumlah angka-angka yang telah dimasukkan : " + total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan: 5
    Masukkan Bilangan: 3
    Masukkan Bilangan: 50
    Jumlah angka-angka yang telah dimasukkan : 58

2. Buat perulangan yang sama dengan struktur perulangan while
    
    <p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka, total;
System.out.println("===PROGRAM WHILE LOOP DENGAN BREAK===");
total=0;
while(true)
{
    System.out.print("Masukkan Bilangan: ");
    angka = input.nextInt();
    total += angka;
    if(total>50)break;
}
System.out.print("Jumlah angka-angka yang telah dimasukkan : " + total);
```

    ===PROGRAM WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan: 44
    Masukkan Bilangan: 21
    Jumlah angka-angka yang telah dimasukkan : 65

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
    System.out.print("Masukkan Bilangan: ");
    angka = input.nextInt();
    total += angka;
    if(total>50)break;
}
while(true);
System.out.print("Jumlah angka-angka yang telah dimasukkan : " + total);
```

    ===PROGRAM DO-WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan: 2
    Masukkan Bilangan: 3
    Masukkan Bilangan: 51
    Jumlah angka-angka yang telah dimasukkan : 56

##### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

// Ketik jawaban disini
>Program tersebut akan menjalankan operasi penambahan dari bilangan yang dimasukkan pengguna, jika total telah melebihi 50 akan dihentikan dan memunculkan hasil operasi total 

2. Jelaskan fungsi kode berikut!
    
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


// Ketik jawaban disini
>Untuk perulangan dengan nilai awal total samadengan 0 dan terus mengulang saat kondisi masih true (terpenuhi) 


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
for(int i=0;i<5;i++)
{
    System.out.print("Masukkan Bilangan: ");
    angka = input.nextInt();
    if(angka>=50)continue;
    total += angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50 = " + total);
avg = (double)total / count;
System.out.println("Rata-rata angka yang kurang dari 50 = " + avg);

```

    ===PROGRAM FOR LOOP DENGAN CONTINUE===
    Masukkan Bilangan: 54
    Masukkan Bilangan: 54
    Masukkan Bilangan: 55
    Masukkan Bilangan: 2
    Masukkan Bilangan: 3
    Jumlah angka-angka yang kurang dari 50 = 5
    Rata-rata angka yang kurang dari 50 = 2.5


5. Jalankan program. Amati apa yang terjadi!


##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3



// Ketik jawaban disini
>Pada percobaan 1 menggunakan "break" yang membuat program berhenti saat pengguna memasukkan angka lebih dari 50.
>
>Pada percobaan 2 menggunakan "continue" yaitu saat pengguna memasukkan angka lebih dari samadengan 50 akan membuat program tidak membaca/ melewati masukan pengguna tersebut. 

2. Jelaskan apa fungsi perintah kode program dibawah ini?

    <p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>



// Ketik jawaban disini
>Untuk mengoperasikan bilangan, jika pengguna memasukkan angka lebih dari samadengan 50 akan membuat program tidak membaca/ melewati masukan pengguna tersebut dan melanjutkan operasi dari masukan yang lainnya.



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
int bil, jmlBilGenap, totalGenap = 1;
double avg;

System.out.print("Masukkan angka: ");
bil = input.nextInt();
jmlBilGenap = bil / 2;

System.out.printf("Banyaknya bilangan genap dari 1 sampai %d adalah %d\n",bil,jmlBilGenap);
System.out.print("Angka genap dalam range tersebut adalah");
for(int i=1;i<=bil;i++)
{
    if(i%2!=0)continue;
    /*
        saat i modulus 2 hasilnya bukan 0 (ganjil), maka nilai i tidak akan dimasukkan ke program berikutnya
    */
    System.out.printf(", %d",i);
    totalGenap += i;
}
totalGenap--;
/*
    decrement untuk mengurangi 1 nilai totalGenap agar nilai awal menjadi 0 dan output sesuai dengan keinginan
*/
avg = (double) totalGenap / jmlBilGenap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bil,totalGenap);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %.1f",bil,avg);
/*
    %f untuk format double, .1 untuk membulatkan nilai koma menjadi 1 desimal
*/
```

    Masukkan angka: 10
    Banyaknya bilangan genap dari 1 sampai 10 adalah 5
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10
    Hasil penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata-rata bilangan genap dari 1 sampai 10 adalah 6.0

2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
    
    <p align="left">
    <img width="184" height="328" src="images/tugas1.jpg" align="left">
    </p>


```Java
// Ketik kode program disini
int x, angka;

System.out.print("Masukkan angka: ");
angka = input.nextInt();
for(x=1; x<=angka; x++) 
{
    if (x%5==0) continue;
    /*
        saat x modulus 5 samadengan 0 (kelipatan 5) maka nilai x tidak akan dimasukkan ke program berikutnya
    */
    System.out.println(x);
}
```

    Masukkan angka: 19
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
int n1=0,n2=1,n3,i,count;
/*
    n1=0 dan n2=1 untuk nilai awal bilangan fibonacci
*/

System.out.print("Masukkan batas Fibonacci: ");
count = input.nextInt();
for(i=0; i<count; i++)   
{
    n3=n1+n2;    
    System.out.printf("\nSum of: %d + %d = %d",n1,n2,n3);
    /*
        output setelah operasi n3, dilanjut memberi nilai n1 dan n2 yang baru dari operasi sebelumnya.
    */
    n1=n2;    
    n2=n3;
}
```

    Masukkan batas Fibonacci: 10

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