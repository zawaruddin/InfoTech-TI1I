## JOBSHEET 6

## PEMILIHAN 2

### Tujuan

Mahasiswa memahami tentang operator logika; Mahasiswa mampu menyelesaikan permasalahan dengan menggunakan sintaks pemilihan bersarang; Mahasiswa mampu membuat sebuah program Java yang memanfaatkan sintaks pemilihan bersarang


### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1

#### Waktu percobaan : 40 menit

1. Tambahkan library Scanner, deklarasi Scanner

2. Buatlah variabel nilai yang memiliki tipe data int untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode di sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();
```

    Masukkan nilai ujian (0-100): 80


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 || nilai <=100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 69){
        System.out.println("Nilai D, Tingkatkan prestasi Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid!");
}
```

    Nilai B, Pertahankan prestasi Anda!


> Penjelasan kode program percobaan 1
1. fungsi kode import java.util.Scanner adalah untuk memasukkan input dari keyboard
2. Scanner input = new Scanner(System.in); adalah deklarasi Scanner
3. int nilai; untuk mendeklarasikan tipe data dan variabel nilai
4. System.out.print("Masukkan nilai ujian (0-100): "); untuk mencetak nilai yang ingin dimasukkan
5. if untuk menunjukkan sebuah kondisi, else if untuk menunjukkan sebuah pernyataan, else untuk menunjukkan jika pernyataan else if tidak terpenuhi

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?

// Jawaban pertanyaan
1. import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();
if(nilai >= 0 && nilai <=100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 69){
        System.out.println("Nilai D, Tingkatkan prestasi Anda!");
    } else {
         System.out.println ("Nilai E, Anda tidak lulus!");
    }     
    } else if (nilai < 0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0!");
    } else if (nilai > 100){
        System.out.println("Nilai yang Anda masukkan lebih dari 100!");
}  else {
}
2. fungsi sintaks if (nilai >=0 && nilai <=100) adalah untuk menunjukkan rentang input nilai dari 0 sampai 100
3. import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();
Masukkan nilai ujian (0-100): 105
if(nilai >= 0 || nilai <=100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 69){
        System.out.println("Nilai D, Tingkatkan prestasi Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid!");
}
Nilai E, Anda tidak lulus!
Mengapa demikian? Karena operator || adalah OR yang berarti tidak menunjukkan rentang nilai

#### Percobaan 2

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

![](images/02.png)

> Flowchart tersebut digunakan untuk menghitung gaji bersih seseorang setelah dipotong pajak sesuai dengan kategorinya (pekerja dan pebisnis) dan besarnya penghasilan. 

2. Tambahkan library Scanner dan deklarasi Scanner

3. Deklarasikan variabel kategori, penghasilan, gajiBersih, dan pajak

    ![](images/05.png)


```Java
// Ketik kode di sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
```

    Masukkan kategori: pebisnis
    Masukkan besarnya penghasilan: 2000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equals ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    }else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
    
} else if (kategori.equals ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Gaji bersih yang Anda terima: 1700000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2
1. if(kategori.equalsIgnoreCase ("pekerja")){ berguna untuk mendeklarasikan kondisi jika yang dimasukkan adalah pekerja dan tidak peduli bagaimana format penulisan dari variabel kategori dengan yang di input kan
2. else if (kategori.equalsIgnoreCase ("pebisnis")){ berguna untuk mendeklarasikan kondisi jika yang dimasukkan adalah pebisnis dan tidak peduli bagaimana format penulisan dari variabel kategori dengan yang di input kan
3. if (penghasilan <= 2000000){
        pajak = 0.1;
menunjukkan jika pengahsilan <= 2000000 akan dikenai pajak sebesar 0.1, begitu juga dengan kode yang mirip dengan kode tersebut.
4. gajiBersih = (int) (penghasilan - (penghasilan * pajak)); digunakan sebagai proses mengitung gaji bersih yang diterima
5. else {
    System.out.println("Kategori yang Anda masukkan salah!"); berguna jika variabel kategori yang dimasukkan tidak sesuai dengan yang di input kan

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

// Jawaban pertanyaan
1. karena hasil output yang diminta adalah tipe data interger, dimana tipe data tersebut tidak mengandung koma
2. fungsi (int) adalah untuk menampilkan output dari variabel gajiBersih ke dalam tipe data interger
3. equalsIgnoreCase berguna untuk tidak mempedulikan bentuk penulisan dari variabel kategori yang di input kan selama tetap bisa dibaca pebisnis ataupun pekerja
4. equals berguna sebagai format penulisan dari variabel kategori harus sesuai dengan yang di input kan

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program kalkulator sederhana menggunakan bahasa pemrograman Java. User akan menginputkan dua buah bilangan riil dan satu buah operator aritmatika (+, -, *, atau /), kemudian program akan mengoperasikan dua bilangan tersebut dengan operator yang sesuai. Petunjuk: gunakan pernyataan switch-case.
Contoh tampilan program:

```
Masukkan bilangan pertama: 2.5
Masukkan operator (+, -, *, /): *
Masukkan bilangan kedua: 4
2.5 * 4.0 = 10.0

```


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
double bil1, bil2, hasil;
char operator;

System.out.print("Masukkan bilangan pertama: ");
bil1 = input.nextDouble();
System.out.print("Inputkan Operator (+,-,*,/): ");
operator = input.next().charAt(0);
System.out.print("Masukkan bilangan kedua: ");
bil2 = input.nextDouble();

switch(operator){
    case '+':
    hasil = bil1 + bil2;
    System.out.println(bil1 + "+" + bil2 + "=" + hasil);
    break;
    case '-':
    hasil = bil1 - bil2;
    System.out.println(bil1 + "-" + bil2 + "=" + hasil);
    break;
    case '*':
    hasil = bil1 * bil2;
    System.out.println(bil1 + "*" + bil2 + "=" + hasil);
    break;
    case '/':
    hasil = bil1 / bil2;
    System.out.println(bil1 + "/" + bil2 + "=" + hasil);
    break;
        
    default:
    System.out.println("Maaf operator yang Anda masukkan salah!");
} 
```

    Masukkan bilangan pertama: 2.5
    Inputkan Operator (+,-,*,/): *
    Masukkan bilangan kedua: 4
    2.5*4.0=10.0


2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int a, b, c;
System.out.print("Masukan bilangan A:");
a = input.nextInt();
System.out.print("Masukan bilangan B:");
b = input.nextInt();
System.out.print("Masukan bilangan C:");
c = input.nextInt();

if(a == b && b!=c && a!=c || b==c && b!=a && a!=c || a==c && b!=a && b!=c) {
    System.out.print("maka hasilnya : segitiga sama kaki"); 
    }else if(a == b || a==c || b ==c){
    System.out.print("maka hasilnya : segitiga sama sisi");
    }else {
    System.out.print("maka hasilnya : segitiga sembarang");
}
```

    Masukan bilangan A:3
    Masukan bilangan B:6
    Masukan bilangan C:5
    maka hasilnya : segitiga sembarang

3. Warung Padang Gembira meminta Anda membuat sebuah program untuk menerima pesanan dari internet. Program yang Anda buat meminta user untuk memasukkan nama makanan dan harga. Setelah itu, user ditawarkan untuk menggunakan pengiriman ekspres. Jika pengguna menolak, maka jenis pengiriman yang digunakan adalah pengiriman reguler. Biaya pengiriman reguler untuk harga makanan kurang dari Rp 100.000 adalah Rp 20.000, sedangkan untuk harga makanan sama dengan atau lebih dari Rp 100.000 biaya pengirimannya adalah Rp 30.000. Untuk jenis pengiriman ekspres, tambahkan biaya tambahan sebesar Rp 25.000 dari standar biaya pengiriman reguler. Tampilkan struk yang berisi nama makanan yang dibeli + harga, biaya pengiriman, dan total yang harus dibayar!
Contoh hasil output program:

```
Masukkan nama makanan: Tuna salad
Masukkan harga makanan: Rp 115000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 0

STRUK PEMBELIAN
Tuna salad        Rp 115000
Biaya pengiriman  Rp 30000
TOTAL             Rp 145000

```

```
Masukkan nama makanan: Beef bulgogi
Masukkan harga makanan: Rp 78000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 1

STRUK PEMBELIAN
Beef bulgogi      Rp 115000
Biaya pengiriman  Rp 45000
TOTAL             Rp 123000

```




```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
    Scanner sc = new Scanner (System.in);
    String nama;
       int harga,total,pilih;
       int biaya = 0;
       int biayaEks=25000;

        
       System.out.print("Masukkan Nama Makanan   : " );
       nama=sc.nextLine();
       System.out.print("Masukkan Harga Makanan : Rp " );
       harga=sc.nextInt();
       System.out.print("Apakah Anda ingin pengiriman ekspres ? : (0 = tidak , 1 = iya) " );
       pilih=sc.nextInt();
        System.out.println("");
       if(pilih==0){
           if(harga>=100000){
                  biaya = 30000;
                  total= biaya+harga;
                  
           }else{
                biaya=20000;
                total= biaya+harga;     
           }
           System.out.println("==== Struk Pembelian ====");
           System.out.println("");
           System.out.println(nama+"\t : Rp "+harga);
           System.out.println("Biaya Pengiriman : Rp "+biaya);
           System.out.println("Total\t\t : "+total);
            
       }else if(pilih==1){
         if(harga>=100000){
                  biayaEks+=30000;
                  total= biayaEks+harga;
                  
           }else{
                biayaEks+=20000;
                total= biayaEks+harga;     
           }
           System.out.println("==== Struk Pembelian ====");
           System.out.println("");
           System.out.println(nama+"\t : Rp "+harga);
           System.out.println("Biaya Pengiriman : Rp "+biayaEks);
           System.out.println("Total\t\t : Rp "+total);
       }
```

    Masukkan Nama Makanan   : Beef bulgogi
    Masukkan Harga Makanan : Rp 78000
    Apakah Anda ingin pengiriman ekspres ? : (0 = tidak , 1 = iya) 1
    
    ==== Struk Pembelian ====
    
    Beef bulgogi	 : Rp 78000
    Biaya Pengiriman : Rp 45000
    Total		 : Rp 123000


4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.println("Masukkan Umur Anda: ");
umur =input.nextInt();

if(umur >=18){
     Scanner input = new Scanner(System.in);
     String kerja;
     System.out.println("Sudah Bekerja? ");
     kerja = input.nextLine();
     if(kerja.equalsIgnoreCase("bekerja")){
     int pendapatan,tanggungan;
     double biayaHidup;
     System.out.println("Masukkan Pendapatan Bulanan: ");
     pendapatan = input.nextInt();
     System.out.println("Masukkan Jumlah Tanggungan ");
     tanggungan = input.nextInt();
     biayaHidup = pendapatan / tanggungan;
     System.out.println("Biaya Hidup Anda adalah "+ biayaHidup);
    if(biayaHidup<300000){
        System.out.println("Anda Miskin");
    } else {
         System.out.println("Anda kaya");
    } 
} else{
         System.out.println("Anda Miskin");
     }
} else {
    Scanner input = new Scanner(System.in);
     String sekolah;
    System.out.println("Masih Sekolah? ");
    sekolah = input.nextLine();
     if(sekolah.equalsIgnoreCase("sekolah")){
        System.out.println("Anda kaya");
     } else {
          System.out.println("Anda Miskin");
     }
}
```

    Masukkan Umur Anda: 
    18
    Sudah Bekerja? 
    belum
    Anda Miskin

