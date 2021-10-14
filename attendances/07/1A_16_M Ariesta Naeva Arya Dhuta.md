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
System.out.println("=====PROGRAM NGITUNG FAKTORIAL DENGAN FOR======");
System.out.print("Masukkan Bilangan : ");
angka= input.nextInt();
for(int i=1; i<=angka; i++)
    faktorial*=i;
System.out.print("Nilai Faktorial nya adalah : "+ faktorial);
```

    =====PROGRAM NGITUNG FAKTORIAL DENGAN FOR======
    Masukkan Bilangan : 5
    Nilai Faktorial nya adalah : 120

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
int i = 1;
while (i<=angka){
    faktorial *=i;
    System.out.printf("%d maka %d \n",i,faktorial);
    i++;
}
System.out.print("Nilai faktorial bilangan tersebut adalah : "+ faktorial);

```

    =====PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN WHILE=====
    Masukkan Bilangan : 5
    1 maka 1 
    2 maka 2 
    3 maka 6 
    4 maka 24 
    5 maka 120 
    Nilai faktorial bilangan tersebut adalah : 120

6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>

// Ketik kode program di atas di bawah sini


##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

// Ketik jawaban disini
sama saja seperti faktorial = faktorial * i

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
String bsmlh="";
System.out.println("=====PROGRAM NGITUNG FAKTORIAL DENGAN FOR======");
System.out.print("Masukkan Bilangan : ");
angka= input.nextInt();
System.out.printf("%dFaktorial=",angka);
for(int i=1; i<=angka; i++){
    faktorial*=i;
    bsmlh+="x"+i;
}
System.out.printf(bsmlh.substring(1, bsmlh.length()));
System.out.print("="+ faktorial);
```

    =====PROGRAM NGITUNG FAKTORIAL DENGAN FOR======
    Masukkan Bilangan : 5
    5Faktorial=1x2x3x4x5=681672704

#### Percobaan 2 : Keluar dari perulangan menggunakan break

#### Waktu percobaan : 40 menit

1. Buatlah perulangan dengan menggunakan for yang memanfaatkan keyword break
<p align="left">
    <img width="696" height="124" src="images/for2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
Scanner input = new Scanner (System.in);
int angka,total;
System.out.println("===PROGRAM FOR LOOP DENGAN BREAK===");
for(total=0; true;){
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    total+=angka;
    if(total>50)break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+ total);
```

2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka,total;
System.out.println("===PROGRAM WHILE LOOP DENGAN BREAK===");
total = 0;
while(true){
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 5
    Masukkan Bilangan : 12
    Masukkan Bilangan : 31
    Masukkan Bilangan : 41
    Jumlah angka-angka yang telah dimasukkan : 89


3. Tuliskan perulangan diatas dalam struktur do-while
    <p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angka,total;
System.out.println("===PROGRAM DO WHILE LOOP DENGAN BREAK===");
total = 0;
do{
    System.out.print("Masukkan Bilangan : ");
    angka=input.nextInt();
    total+=angka;
    if(total>50) break;
}
while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan : "+total);
```

    ===PROGRAM DO WHILE LOOP DENGAN BREAK===
    Masukkan Bilangan : 5
    Masukkan Bilangan : 12
    Masukkan Bilangan : 31
    Masukkan Bilangan : 23
    Jumlah angka-angka yang telah dimasukkan : 71


# Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!


```Java
// Ketik jawaban disini

```

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>



```Java
// Ketik jawaban disini

```

#### Percobaan 3 : Keluar dari step perulangan menggunakan continue

#### Waktu percobaan : 40 menit

1. Buat program looping menggunakan struktur perulangan for seperti di bawah ini: 
<p align="left">
    <img src="images/forContinue.jpg" align="left">
    </p>



```Java
// Ketik kode program di atas di bawah sini
Scanner input = new Scanner(System.in);
int angka,total,count;
double avg;
count = 0;
System.out.println("===PROGRAM FOR LOOP DENGAN CONTINUE===");
for(int i=0;i<5;i++){
    System.out.print("Masukkan Bilangan : ");
    angka = input.nextInt();
    if(angka>=50) continue;
    total+=angka;
    count++;
}
System.out.println("Jumlah angka-angka yang kurang dari 50 "+ total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50 :"+avg);
```

5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3


```Java
// Ketik jawaban disini

```

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>


```Java
// Ketik jawaban disini

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
// Ketik kode program disini
int bil,genap,togen=1;
double avg;
System.out.println("Masukkan Bilangan : ");
bil=input.nextInt();
genap=bil / 2;

System.out.printf("Banyaknya bilangan genap dari %d sampai %d adalah %d \n",togen,bil,genap);
System.out.print("Angka genap dalam range tersebut adalah");
for(int i=1;i<=bil;i++){
    if(i%2!=0)continue ;
    System.out.printf(",%d",i);
    togen+=i;
}
avg = (double)(togen-1) / genap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bil,togen-1);
System.out.printf("\nRata-rata bilangan genap dari 1 sampai %d adalah %.1f",bil,avg);
```

    Masukkan Bilangan : 
    10
    Banyaknya bilangan genap dari 1 sampai 10 adalah 5 
    Angka genap dalam range tersebut adalah,2,4,6,8,10
    Hasil penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata-rata bilangan genap dari 1 sampai 10 adalah 6.000000




    java.io.PrintStream@3f793e8



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
// Ketik kode program disini
int angka;
System.out.println("Masukkan Bilangan : ");
angka = input.nextInt();
for(int i=1;i<=angka;++i){
    if(i%5==0) continue; 
        System.out.printf("\n%d",i);
}
        
```

    Masukkan Bilangan : 
    50
    
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
    21
    22
    23
    24
    26
    27
    28
    29
    31
    32
    33
    34
    36
    37
    38
    39
    41
    42
    43
    44
    46
    47
    48
    49

3. Buatlah sebuah program yang menampilkan deret bilangan fibonacci sebagai berikut. Dimana bilangan yang terletak di sebelah kanan adalah hasil penjumlahan dari 2 bilangan sebelumnya
 <p align="left">
    <img width="451" height="226" src="images/fibo.png" align="left">
    </p>



```Java
// Ketik kode program disini

```
