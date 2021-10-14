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
int angka, faktorial = 1;

Scanner s = new Scanner(System.in);
```

3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas


```Java
System.out.print("Input angka: ");
angka = s.nextInt();
for(int i = 1; i<= angka; i++){
    faktorial = faktorial *= i;
    System.out.printf("i = %d hasilnya adallah %d\n",i, faktorial,angka);
}
System.out.println("Hasilnya adallah "+faktorial);
```

    Input angka: 5
    i = 1 hasilnya adallah 1
    i = 2 hasilnya adallah 2
    i = 3 hasilnya adallah 6
    i = 4 hasilnya adallah 24
    i = 5 hasilnya adallah 120
    Hasilnya adallah 120


4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
System.out.print("Masukkan angka: ");
angka = s.nextInt();
for(int i = 1; i<= angka; i++){
    faktorial = faktorial *= i;
    System.out.printf("i = %d hasil nya adallah %d\n",i, faktorial,angka);
}
System.out.println("Nilai faktorial bilangan tersebut adallah "+faktorial);
```

    Masukkan angka: 5
    i = 1 hasil nya adallah 120
    i = 2 hasil nya adallah 240
    i = 3 hasil nya adallah 720
    i = 4 hasil nya adallah 2880
    i = 5 hasil nya adallah 14400
    Nilai faktorial bilangan tersebut adallah 14400


5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
faktorial = 1;
System.out.println("Input angka: ");
angka = s.nextInt();
int i= 1;//exp1 atau inisialisasi
while(i <=angka){// di sini adalah kondisi atau ep2
    //pernyataan, nanti mau apa
    //pernyataan = statement
    faktorial*= i;
    System.out.printf("i = %d maka %d\n",i,faktorial);
    i++;//increment
}
System.out.printf("Hasil dari faktorial %d adalah %d",angka,faktorial);
```

    Input angka: 
    5
    i = 1 maka 1
    i = 2 maka 2
    i = 3 maka 6
    i = 4 maka 24
    i = 5 maka 120
    Hasil dari faktorial 5 adalah 120




    java.io.PrintStream@5da7eca1



6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
faktorial = 1;
System.out.println("Input angka: ");
angka = s.nextInt();
int i= 1;//exp1 atau inisialisasi
do{//pernyataan, nanti mau apa
    //pernyataan = statement
    faktorial*= i;
    System.out.printf("i = %d maka %d\n",i,faktorial);
    i++;//increment
}
while(i <=angka);// di sini adalah kondisi atau ep2
System.out.printf("Hasil dari faktorial %d adalah %d",angka,faktorial);
```

    Input angka: 
    5
    i = 1 maka 1
    i = 2 maka 2
    i = 3 maka 6
    i = 4 maka 24
    i = 5 maka 120
    Hasil dari faktorial 5 adalah 120




    java.io.PrintStream@5da7eca1



##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>
    

berfungsi untuk mengalikan variabel i

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
angka = s.nextInt();

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




    java.io.PrintStream@5da7eca1



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
    angka=s.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan Bilangan : 10
    Masukkan Bilangan : 55
    Jumlah angka-angka yang telah dimasukkan : 65


2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
int angka,total;
int angka,total;
System.out.println("===PROGRAM WHILE LOOP DENGAN BREAK===");
total=0;
while(true){
    System.out.print("Masukkan Bilangan : ");
    angka=s.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 15
    Masukkan Bilangan : 55
    Jumlah angka-angka yang telah dimasukkan : 70


3. Tuliskan perulangan diatas dalam struktur do-while
    <p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
int angka,total;
int angka,total;
System.out.println("===PROGRAM DO-WHILE LOOP DENGAN BREAK===");
total=0;
do
{ System.out.print("Masukkan Bilangan : ");
    angka=s.nextInt();
    total+=angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM DO-WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 50
    Masukkan Bilangan : 100
    Jumlah angka-angka yang telah dimasukkan : 150


##### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

total=0 bebas untuk memasukan variabel angka

if(total>50) break; sebagai limit variabel yang dimasukkan

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>


Berfungsi untuk memberi variabel dan semua variabel yang dimasukkan benar

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
System.out.println("===PROGRAM FOR LOOP DENGAN CONTINUE===");
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

    ===PROGRAM FOR LOOP DENGAN CONTINUE===
    Masukkan Bilangan : 100
    Masukkan Bilangan : 50
    Masukkan Bilangan : 45
    Masukkan Bilangan : 24
    Masukkan Bilangan : 50
    Jumlah angka-angka yang kurang dari 50: 69
    Rata-rata angka yang kurang dari 50: 34.5



```Java
5. Jalankan program. Amati apa yang terjadi!
```

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3

percobaan 2 menjalankan vungsi Continue

Percobaan 3 menjalankan vungsi break

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>


```Java
Jika angka lebih dari 50 maka variabel tidak di hitung
```

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
    System.out.printf(", %d",i);
    totalGenap += i;
}
avg = (double)(totalGenap-1) / jmlBilGenap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bil,totalGenap-1);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %.1f",bil,avg);
```

    Masukkan angka: 20
    Banyaknya bilangan genap dari 1 sampai 20 adalah 10
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    Hasil penjumlahan bilangan genap dari 1 sampai 20 adalah 110
    Rata-rata bilangan genap dari 1 sampai 20 adalah 11.0




    java.io.PrintStream@576c3841



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
int x;
for (x=1; x<=19; x++)
    Sytem.out.printf("%d\n",x);

```

    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
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
        int limit, past, current, fibonacci;
        Scanner input = new Scanner(System.in);
        System.out.print("Masukan banyak bilangan yang mau ditampilkan: ");
        limit = input.nextInt();
        past = 1;
        current = 1;
        fibonacci = 1;
        for (int i =1; i <= limit; i++){
            System.out.printf("sumof: %d + %d = %d\n",past,current,fibonacci);
            fibonacci = past + current;
            past = current;
            current = fibonacci;
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

