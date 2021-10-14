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
Scanner sc = new Scanner(System.in);
```


```Java
3. Buatlah deklarasi dan inisialisasi variabel faktorial sesuai dengan flowchart diatas
```


```Java
// Ketik kode program di bawah sini
int angka, faktorial = 1;
```

4. Tambahkan struktur perulangan untuk menghitung hasil faktorial sebuah nilai yang diinputkan menggunakan for
    
    <p align="left">
    <img width="696" height="124" src="images/for.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
System.out.println("===PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR===");
System.out.print("Masukkan angka: ");
angka = sc.nextInt();

for(int i=1; i<=angka; i++){
    faktorial = faktorial*i;
    System.out.printf("i = %d hasilnya adalah %d\n",i,faktorial);
}
System.out.println("Hasilnya adalah "+faktorial);
```

    ===PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR===
    Masukkan angka: 5
    i = 1 hasilnya adalah 1
    i = 2 hasilnya adalah 2
    i = 3 hasilnya adalah 6
    i = 4 hasilnya adalah 24
    i = 5 hasilnya adalah 120
    Hasilnya adalah 120


5. Ubah nilai variabel faktorial seperti semula. Kemudian gunakan struktur perulangan while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/while.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial = 1;
System.out.print("Input angka: ");
angka = sc.nextInt();

int i = 1;
while(i<=angka){
    faktorial = faktorial*i;
    System.out.printf("i = %d maka %d\n",i,faktorial);
    i++;
}
System.out.printf("Hasil dari faktorial %d adalah %d\n ",angka,faktorial);
/*
int i=1;
while(i<=angka){
    faktorial*=i;
    i++;
}
System.out.println("Nilai faktorial bilnagan tersebut adalah : "+faktorial);
*/
```

    Input angka: 5
    i = 1 maka 1
    i = 2 maka 2
    i = 3 maka 6
    i = 4 maka 24
    i = 5 maka 120
    Hasil dari faktorial 5 adalah 120
     




    java.io.PrintStream@77cbab9



6. Kembalikan lagi nilai variabel faktorial seperti semula. Gunakan struktur perulangan do-while untuk menghitung hasil faktorial sebuah nilai yang diinputkan
    
    <p align="left">
    <img width="696" height="124" src="images/dowhile.jpg" align="left">
    </p>


```Java
//Ketik kode program di atas di bawah sini
faktorial = 1;
System.out.println("===PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR===");
System.out.print("Masukkan angka: ");
angka = sc.nextInt();

int i=1;
do{
    faktorial*=i;
    i++;
}
while(i<=angka);
System.out.print("Nilai faktorial bilangan tersebut adalah: "+faktorial);
```

    ===PROGRAM MENGHITUNG NILAI FAKTORIAL DENGAN FOR===
    Masukkan angka: 5
    Nilai faktorial bilangan tersebut adalah: 120

##### Pertanyaan
1. Pada program diatas, apakah kegunaan baris berikut?
<p align="left">
    <img src="images/hitungFaktorial.jpg" align="left">
    </p>

// Ketik jawaban disini

Mengalikan angka selanjutnya

2. Modifikasi program diatas dibagian struktur pemilihannya sehingga hasilnya menjadi seperti di bawah ini:
<p align="left">
    <img src="images/modifP1.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
faktorial = 1;
System.out.println("===PROGRAM MENGHITUNG NILAI FAKTORIAL===");
System.out.print("Masukkan bilangan: ");
angka = sc.nextInt();

int i = 1;
while(i<=angka){
    //faktorial = faktorial*i;
    System.out.printf("%dx",i);
    faktorial = faktorial*i;
    i++;
}
System.out.printf(" = %d\n ",faktorial);

```

    ===PROGRAM MENGHITUNG NILAI FAKTORIAL===
    Masukkan bilangan: 4
    1x2x3x4x = 24
     




    java.io.PrintStream@e355105



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
for(total=0; true;){
    System.out.print("Masukkan bilangan: ");
    angka=in.nextInt();
    total+=angka;
    if(total>50)break;
}System.out.println("Jumlah angka-angka yang telah dimasukkan: "+total);
```

    ===PROGRAM FOR LOOP DENGAN BREAK===
    Masukkan bilangan: 3
    Masukkan bilangan: 3
    Masukkan bilangan: 3
    Masukkan bilangan: 78
    Jumlah angka-angka yang telah dimasukkan: 87


2. Buat perulangan yang sama dengan struktur perulangan while
<p align="left">
    <img width="696" height="124" src="images/while2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int ongko,totale;
System.out.println("PROGRAM WHLE LOOP DENGAN BREAK");
totale=0;
while(true){
    System.out.print("Masukkan bilangan: ");
    ongko = in.nextInt();
    totale+=ongko;
    if(totale>50)break;
}System.out.println("Jumlah angka-angka yang telah dimasukkan: "+totale);
```

    PROGRAM WHLE LOOP DENGAN BREAK
    Masukkan bilangan: 14
    Masukkan bilangan: 67
    Jumlah angka-angka yang telah dimasukkan: 81


3. Tuliskan perulangan diatas dalam struktur do-while
    <p align="left">
    <img width="696" height="124" src="images/dowhile2.jpg" align="left">
    </p>


```Java
// Ketik kode program di atas di bawah sini
int angKa,toTal;
System.out.println("PROGRAM DO-WHILE LOOP DENGAN BREAK");
toTal=0;
do{
    System.out.print("Masukkan bilangan: ");
    angKa=in.nextInt();
    toTal+=angKa;
    if(toTal>50)break;
}while(true);
System.out.println("Jumlah angka-angka yang telah dimasukkan: "+toTal);
```

    PROGRAM DO-WHILE LOOP DENGAN BREAK
    Masukkan bilangan: 34
    Masukkan bilangan: 32
    Jumlah angka-angka yang telah dimasukkan: 66


##### Pertanyaan
1. Jelaskan fungsi kode program yang telah dibuat pada percobaan diatas!

int angKa,toTal; //Membuat variabel

System.out.println("PROGRAM DO-WHILE LOOP DENGAN BREAK");
toTal=0;  //Membuat inputan dari keyboard  

do{
    System.out.print("Masukkan bilangan: ");
    angKa=in.nextInt();
    toTal+=angKa;
    if(toTal>50)break; //Jika total lebih dari 50 maka program akan dihentikan
}while(true); 
System.out.println("Jumlah angka-angka yang telah dimasukkan: "+toTal); //Output jika program akan dihentikan

2. Jelaskan fungsi kode berikut!
    <p align="left">
    <img src="images/forPertanyaan2.jpg" align="left">
    </p>



```Java
// Ketik jawaban disini

Acuan agar program if dapat berjalan 
```

#### Percobaan 3 : Keluar dari step perulangan menggunakan continue

#### Waktu percobaan : 40 menit

1. Buat program looping menggunakan struktur perulangan for seperti di bawah ini: 
<p align="left">
    <img src="images/forContinue.jpg" align="left">
    </p>



```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner uwu = new Scanner(System.in);

int angka, total, count;
double avg;
count = 0;
    
System.out.println("PROGRAM FOR LOOP DENGAN CONTINUE");
for(int i=0; i<5; i++){
    System.out.print("Masukkan bilangan: ");
    angka = uwu.nextInt();
    if(angka>=50)continue;
    total+=angka;
    count++;
}
System.out.println("Jumlah angka yang kurang dari 50 = "+total);
avg=(double)total/count;
System.out.println("Rata-rata angka yang kurang dari 50 = "+avg);
```

    PROGRAM FOR LOOP DENGAN CONTINUE
    Masukkan bilangan: 34
    Masukkan bilangan: 5
    Masukkan bilangan: 2
    Masukkan bilangan: 1
    Masukkan bilangan: 67
    Jumlah angka yang kurang dari 50 = 42
    Rata-rata angka yang kurang dari 50 = 10.5



```Java
5. Jalankan program. Amati apa yang terjadi!
```

##### Pertanyaan
1. Jelaskan Perbedaan dari percobaan 2 dan percobaan 3


```Java
// Ketik jawaban disini
Percobaan 2 menggunakan break, pernyataan break akan menghentikan secara paksa perulangan
Percobaan 3 menggunakan continue, menghentikan perulangan 1kali saja
```

2. Jelaskan apa fungsi perintah kode program dibawah ini?
<p align="left">
    <img width="352" height="79" src="images/continuePertanyaan.jpg" align="left">
    </p>


```Java
// Ketik jawaban disini
Jika angka lebih dari / sama dengan 50 maka akan dihentikan perulangan sebanyak 1kali oleh continue
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
import java.util.Scanner;
Scanner aw = new Scanner(System.in);

int bil,jmlBilGenap;
int totalGenap=1;
double avg;

System.out.print("Masukkan bilangan: ");
bil = aw.nextInt();

jmlBilGenap = bil/2;
System.out.println("Banyaknya bilangan genap dari 1 sampai "+bil+" adalah "+jmlBilGenap);

System.out.print("Angka genap dalam range tersebut adalah");
for(int i=1; i<=bil; i++){
    if(i%2!=0)continue;
    System.out.printf(", %d",i);
    totalGenap+=i;
}
avg = (double)(totalGenap-1)/jmlBilGenap;
System.out.printf("\nHasil penjumlahan bilangan genap dari 1 sampai %d adalah %d",bil,totalGenap-1);
System.out.printf("\nRata rata bilangan genap dari 1 sampai %d adalah %.1f",bil,avg);

```

    Masukkan bilangan: 10
    Banyaknya bilangan genap dari 1 sampai 10 adalah 5
    Angka genap dalam range tersebut adalah, 2, 4, 6, 8, 10
    Hasil penjumlahan bilangan genap dari 1 sampai 10 adalah 30
    Rata rata bilangan genap dari 1 sampai 10 adalah 6.0



2. Buatlah program untuk menampilkan angka 1 hingga angka masukan pengguna secara berurutan dan melompati angka kelipatan 5. Seperti tampilan di bawah ini
<p align="left">
<img width="184" height="328" src="images/tugas1.jpg" align="left">
</p>


```Java
// Ketik kode program disini
import java.util.Scanner;
Scanner u = new Scanner(System.in);

int angka;

System.out.print("Masukkan angka: ");
angka = u.nextInt();

int i;
for(int i=1; i<=angka; i++){
    if(i%5!=0)
    System.out.printf("%d  \n",i);
}
```

    Masukkan angka: 16
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


3. Buatlah sebuah program yang menampilkan deret bilangan fibonacci sebagai berikut. Dimana bilangan yang terletak di sebelah kanan adalah hasil penjumlahan dari 2 bilangan sebelumnya
 <p align="left">
    <img width="451" height="226" src="images/fibo.png" align="left">
    </p>



```Java
// Ketik kode program disini
import java.util.Scanner;
Scanner z = new Scanner(System.in);

int deret, a, b, c;

System.out.print("Masukkan jumlah deret: ");
deret = z.nextInt();

a = 1;
b = 1;
c = 1;

for(int i=1; i<=deret; i++){
    System.out.printf("Sum of: %d + %d = %d \n",a,b,c);
    c = a + b;
    a = b;
    b = c;
}
```
    p
    Masukkan jumlah deret: 9
    Sum of: 1 + 1 = 1
    Sum of: 1 + 2 = 2
    Sum of: 2 + 3 = 3
    Sum of: 3 + 5 = 5
    Sum of: 5 + 8 = 8
    Sum of: 8 + 13 = 13
    Sum of: 13 + 21 = 21
    Sum of: 21 + 34 = 34
    Sum of: 34 + 55 = 55
