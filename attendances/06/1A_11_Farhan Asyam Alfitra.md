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
Scanner input = new Scanner (System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();
```

    Masukkan nilai ujian (0-100): 105


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 || nilai <= 100){
    if(nilai >= 90 && nilai <=100){
        System.out.println("Nilai A, EXCELLENT! ");
    } else if (nilai >=80 && nilai <=89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else if (nilai <= 0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0");
    } else if (nilai >= 100){
        System.out.println("Nilai yang Anda masukkan lebih dari 100");
    } else {
        System.out.println("Nilai E, Anda tidak Lulus!");
    }
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid");
}
```

    Nilai yang Anda masukkan lebih dari 100


> Penjelasan kode program percobaan 1

kita menggunakan kode program diatas karena jika kita memasukkan nilai yang tidak sesuai dengan kondisi yang pertama, maka akan menjalankan kondisi yang dibawahnya.

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?

// Jawaban pertanyaan



1. 
    if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <=100){
        System.out.println("Nilai A, EXCELLENT! ");
    } else if (nilai >=80 && nilai <=89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else if (nilai <= 0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0");
    } else if (nilai >= 100){
        System.out.println("Nilai yang Anda masukkan lebih dari 100");
    } else {
        System.out.println("Nilai E, Anda tidak Lulus!");
    }
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid");
}



2. fungsinya memberikan range dari nilai yang dimasukkan
nilai lebih dari sama denga 0 dan nilai kurang dari sama dengan 100
    
    
    
3. Nilai yang Anda masukkan lebih dari 100
    karena nilai yang dimasukkan lebih dari 100

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

    Masukkan kategori: pekerja
    Masukkan besarnya penghasilan: 2000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang anda terima: " +gajiBersih);
    
} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Gaji bersih yang anda terima: 1800000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2

dalam percobaan 2, memiliki tujuan untuk membedakan antara "pekerja" dan "pebisnis"
penggunaan equals ditujukan untuk membandingkan satu dengan yang lain

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

// Jawaban pertanyaan

1. 1741212, karena kita menggunakan int yang dikhususkan untuk bilangan bulat

2. hasil menjadi bilangan bulat
3. 1700000(tidak ada perubahan). kegunaan equalsIgnoreCase huruf tidak sensitive case 
4. terdapat eror, karena equals merupakan sensitive case huruf harus berukuran sama, fungsinya untuk membandingkan 2 variabel bertipe String

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
public class java {

    public  static void main(String[] args){
        Scanner Input = new Scanner(System.in);
        //operator
        float a,b,hasil;
        char operator;
 
        Scanner input = new Scanner(System.in);
        System.out.print("nilai a = ");
        a = input.nextFloat();
 
        System.out.print("operator = ");
        operator = input.next().charAt(0);
 
        System.out.print("nilai b = ");
        b = input.nextFloat();
 
        System.out.println("input = " + a + " " + operator + " " + b);
 
        //jika
 
        if (operator == '+' ){
            hasil = a + b;
            //penjumlahan
            System.out.print(" hasil = " + hasil);
 
        }else if (operator == '-'){
            hasil = a - b;
            //pengurangan
            System.out.print(" hasil = " + hasil);
 
        }else if (operator == '*'){
            hasil = a * b;
            //perkalian
            System.out.print(" hasil = " + hasil);
 
        }else if(operator == '/'){
 
            //pembagian
            if ((b == 0)){
                System.out.print("hasilnya tidak terhingga");
            }else {
                hasil = a / b;
                System.out.print(" hasil = " + hasil);
            }
 
 
        }else {
            System.out.print("kosong");
        }
 
 
         
 
    }
}
```



2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int sisia, sisib, sisic;

System.out.print ("sisia= ");
sisia = input.nextInt ();
System.out.print ("sisib= ");
sisib = input.nextInt ();
System.out.print ("sisic= ");
sisic = input.nextInt ();


if ((sisia == 0) || (sisib == 0) || (sisic == 0)) {
 System.out.println("Bukan Segitiga");
} else {
if ((sisia == sisib) && (sisic == sisia))
 System.out.println("Segitiga Sama Sisi");
else
if ((sisia == sisib) || (sisia == sisic) || (sisib == sisic))
 System.out.println("Segitiga Sama Kaki");
else
 System.out.println("Segitiga Sembarang");
 }




```

    sisia= 3
    sisib= 3
    sisic= 3
    Segitiga Sama Sisi


### 3. Warung Padang Gembira meminta Anda membuat sebuah program untuk menerima pesanan dari internet. Program yang Anda buat meminta user untuk memasukkan nama makanan dan harga. Setelah itu, user ditawarkan untuk menggunakan pengiriman ekspres. Jika pengguna menolak, maka jenis pengiriman yang digunakan adalah pengiriman reguler. Biaya pengiriman reguler untuk harga makanan kurang dari Rp 100.000 adalah Rp 20.000, sedangkan untuk harga makanan sama dengan atau lebih dari Rp 100.000 biaya pengirimannya adalah Rp 30.000. Untuk jenis pengiriman ekspres, tambahkan biaya tambahan sebesar Rp 25.000 dari standar biaya pengiriman reguler. Tampilkan struk yang berisi nama makanan yang dibeli + harga, biaya pengiriman, dan total yang harus dibayar!
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

```


```Java
//ketik kode program dan lampirkan hasilnya disini

import java.util.Scanner;
Scanner input = new Scanner(System.in);
String ekspres, makanan;
int harga, total;


System.out.println("Masukkan nama makanan: ");
makanan = input.nextLine();
System.out.print("Masukkan harga makanan: ");
harga = input.nextInt();
System.out.println("Apakah Anda ingin pengiriman ekspres? ketik no untuk tidak,ketik yes untuk ya ");
ekspres = input.nextLine();

if(ekspres.equalsIgnoreCase("no")){
    if(harga >= 100000){
        System.out.println("TAGIHAN PEMBELIAN");
        System.out.println(String.format("%s Rp %s", makanan,harga));
        System.out.println("Biaya Pengiriman: Rp.55.000 " );
        System.out.println("TOTAL "+ (harga  + 55000));
      }else if (harga <=100000){
        System.out.println("TAGIHAN PEMBELIAN");
        System.out.println(String.format("%s Rp %s",makanan, harga));
        System.out.println("Biaya Pengiriman: Rp.45.000 " );
        System.out.println("TOTAL "+(harga + 45000));
    }
}
if(ekspres.equalsIgnoreCase("yes")){
   if(harga >= 100000){
        System.out.println("TAGIHAN PEMBELIAN");
        System.out.println(String.format("%s Rp %s", makanan,harga));
        System.out.println("Biaya Pengiriman: Rp.30.000 " );
        System.out.println("TOTAL "+ (harga  + 30000));
      }else if (harga <=100000){
        System.out.println("TAGIHAN PEMBELIAN");
        System.out.println(String.format("%s Rp %s",makanan, harga));
        System.out.println("Biaya Pengiriman: Rp.20.000 " );
        System.out.println("TOTAL "+(harga + 20000));
    }
}
```

    Masukkan nama makanan: 
    sald
    Masukkan harga makanan: 200000
    Apakah Anda ingin pengiriman ekspres? ketik no untuk tidak,ketik yes untuk ya 


# 4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner Input = new Scanner(System.in);
String sekolah, kerja;
int umur;
System.out.println("Masukkan Umur: ");
umur = Input.nextInt();

if (umur >=18){
    Scanner input - new Scanner(System.in);
    String kerja;
    System.out.println("Susah Bekerja?");
    kerja = input.nextLine();
    if(kerja.equalsIgnoreCase("Bekerja")){
    int pendapatan,tanggungan;
    double biayahidup;
    System.out.println("Masukkan pendapatan Bulanan: ");
    pendapatan = input.nextInt();
    System.out.println("Masukkan jumlah tanggungan: ");
    tanggungan = input.nextInt();
    biayahidup = pendapatan / tanggungan;
    System.out.println("Biaya Hidup" + biayahidup);
    if (biayahidup < 30000){
        System.out.println("Penduduk Miskin");
    } else {
        System.out.println("Bukan Penduduk Miskin");
    }
    }
    
} else {
    System.out.println("Masih Sekolah? ");
    sekolah = input.nextLine();
    if(sekolah.equalsIgnoreCase("sekolah")){
        System.out.println("Bukan Penduduk Miskin");
    } else {
        System.out.println("Penduduk Miskin");
    }
    }


```


```Java

```
