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
Scanner input = new Scanner(System.in)
```


```Java
3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas
```


```Java
// Ketik kode program di bawah sini
int faktorial = 1
```

4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
int angka, faktorial = 1;

Scanner input = new Scanner(System.in);
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan :");
angka = input.nextInt();
for(int i = 1; i<=angka; i++){
    faktorial*=i;
    System.out.printf("i = %d hasilnya adalah %d\n",i,faktorial);
}
System.out.println("Nilai faktorial bilangan tersebut adalah : "+faktorial);

```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan :5
    i = 1 hasilnya adalah 1
    i = 2 hasilnya adalah 2
    i = 3 hasilnya adalah 6
    i = 4 hasilnya adalah 24
    i = 5 hasilnya adalah 120
    Nilai faktorial bilangan tersebut adalah : 120


5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini

faktorial = 1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan :");
angka = input.nextInt();
int i=1;
while(i<=angka){
    i++;
}
System.out.println("Nilai faktorial bilangan tersebut adalah : "+faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan :5
    Nilai faktorial bilangan tersebut adalah : 1


6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini

faktorial = 1;
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan :");
angka = input.nextInt();
int i=1;
do{
    faktorial*=i;
    i++;
}
while(i<=angka);
System.out.println("Nilai faktorial bilangan tersebut adalah : "+faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan :5
    Nilai faktorial bilangan tersebut adalah : 120


##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>


```Java
// Ketik jawaban disini
berguna untuk menghitung variabel faktorial dikali i atau
untuk mempersingkat "faktorial * i = faktorial"
```

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
faktorial = 1;
int i = 1;
String fmt = "";
System.out.println("=====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====");
System.out.print("Masukkan Bilangan : ");
angka = input.nextInt();

for(int i=1; i <= angka; i++) {
    faktorial *=i;
    fmt = fmt.concat("x" + i);
};
System.out.printf("%dFaktorial = ", angka);
System.out.printf(fmt.substring(1, fmt.length()));
System.out.printf(" = %d", faktorial);
```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR=====
    Masukkan Bilangan : 5
    5Faktorial = 1x2x3x4x5 = 120




    java.io.PrintStream@72773258



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
System.out.println("Jumlah angka-angka yang telah dimasukkan")
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 5
    Masukkan Bilangan : 3
    Masukkan Bilangan : 45
    Jumlah angka-angka yang telah dimasukkan


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
    angka= input.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan")
```

    ===PROGRAM WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 21
    Masukkan Bilangan : 42
    Jumlah angka-angka yang telah dimasukkan


3. Tuliskan perulangan diatas dalam struktur do-while
    <p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini

int angka,total;
    System.out.println("===PROGRAM DO-WHILE LOOP DENGAN BREAK===");
total=0;
do
{
    System.out.print("Masukkan Bilangan : ");
    angka= input.nextInt();
    total+=angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan")

```

    ===PROGRAM DO-WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 1
    Masukkan Bilangan : 2
    Masukkan Bilangan : 3
    Masukkan Bilangan : 4
    Masukkan Bilangan : 5
    Masukkan Bilangan : 6
    Masukkan Bilangan : 7
    Masukkan Bilangan : 65
    Jumlah angka-angka yang telah dimasukkan


### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

// Ketik jawaban disini

kode program tersebut berfungsi untuk keluar dari perulangan sintaks jika, suatu syarat sudah terpenuhi menggunakan "break", jika semua bilangan yang dimasukkan dijumlahkan lebih dari 50 maka perulangan selesai

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


// Ketik jawaban disini

memiliki arti variabel total dimulai dari 0, dan loop terus berjalan hingga dihentikan

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
    System.out.println("===PROGRAM FOR LOOP DENGAN CONTINUE===");
for(int i=0;i<5;i++){
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    if(angka>=50)continue;
    total+=angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50: "+total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50: "+avg);
```

    ===PROGRAM FOR LOOP DENGAN CONTINUE===
    Masukkan Bilangan : 4
    Masukkan Bilangan : 2
    Masukkan Bilangan : 5
    Masukkan Bilangan : 3
    Masukkan Bilangan : 2
    Jumlah angka-angka yang kurang dari 50: 16
    Rata-rata angka yang kurang dari 50: 3.2


5. Jalankan program. Amati apa yang terjadi!

yang terjadi ialah jika angka yang dimasukkan lebih dari damadengan 50 maka angka tidak akan diprooses di program selanjutnya

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

// Ketik jawaban disini
percobaan 2 >> memberhentikan perulangan dengan break, jika syarat sudah terpenuhi sedangkan 
percobaan 3 >> menggunakan continue yang digunakan untuk memberhentikan perulangan 1 kali saja di tengah jika syarat terpenuhi.

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>

// Ketik jawaban disini

Fungsi dari perintah kode tersebut adalah jika angka yang dimasukkan lebih dari samadengan 50 maka akan diskip atau tidak diproses di kode program dibawahnya. atau kode tersebut digunakan untuk memberhentikan perulangan 1 kali saja di tengah jika syarat terpenuhi.

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

int bil, jmlBilGen, totalGen = 1;
double avg;

System.out.print("Masukkan angka: ");
bil = input.nextInt();
jmlBilGen = bil / 2;

System.out.printf("Banyaknya bilangan genap dari 1 sampai %d adalah %d\n",bil,jmlBilGen);
System.out.print("Angka genap dalam range tersebut adalah");
for(int i=1;i<=bil;i++)
{
    if(i%2!=0)continue;
    System.out.printf(", %d",i);
    totalGen += i;
}
avg = (double)(totalGen-1) / jmlBilGen;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bil,totalGen-1);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %.1f",bil,avg);

```

    Masukkan angka: 10
    Banyaknya bilangan genap dari 1 sampai 10 adalah 5
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10
    Hasil penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata-rata bilangan genap dari 1 sampai 10 adalah 6.0




    java.io.PrintStream@72773258



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
// Ketik kode program disini

int angka;
System.out.println("Masukkan Angka : ");
angka = input.nextInt();
for(int i=1;i<=angka;++i){
    if(i%5==0) continue;
        System.out.printf("\n%d",i);
    
}

```

    Masukkan Angka : 
    20
    
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
import java.util.Scanner;
        int lim, n1, n2, n3;
        Scanner input = new Scanner(System.in);
        System.out.print("Masukan banyak bilangan yang mau ditampilkan: ");
        lim = input.nextInt();
        n1 = 1;
        n2 = 1;
        n3 = 1;
        for (int i =1; i <= lim; i++){
            System.out.printf("sumof: %d + %d = %d\n",n1,n2,n3);
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
```

    Masukan banyak bilangan yang mau ditampilkan: 10
    sumof: 1 + 1 = 1
    sumof: 1 + 2 = 2
    sumof: 2 + 3 = 3
    sumof: 3 + 5 = 5
    sumof: 5 + 8 = 8
    sumof: 8 + 13 = 13
    sumof: 13 + 21 = 21
    sumof: 21 + 34 = 34
    sumof: 34 + 55 = 55
    sumof: 55 + 89 = 89



```Java

```
