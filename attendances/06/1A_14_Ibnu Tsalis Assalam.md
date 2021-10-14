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
    Masukkan nilai ujian (0-100): 89

3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >=0 && nilai <= 100)
{
    if(nilai >= 90 && nilai <=100)
    {
        System.out.println("Nilai A, EXCELLENT!");
    }
    else if(nilai >= 80 && nilai <=89)
    {
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    }
    else if(nilai >= 60 && nilai <=79)
    {
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } 
    else if(nilai >= 50 && nilai <=59)
    {
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } 
    else
    {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else{
    System.out.println("Nilai yang anda masukkan tidak valid!");
}
```

    Nilai B, Pertahankan prestasi Anda!

> Penjelasan kode program percobaan 1
>
> if(nilai >= ... && nilai <= ...) digunakan untuk menentukan kondisi nilai lebih dari samadengan ... dan kurang dari samadengan ...; jika tidak terpenuhi kedua kondisinya maka tidak termasuk kondisinya. Didalamnya lagi terdapat kondisi yang sama untuk menentukan pernyataan disetiap kondisi yang berbeda-beda

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```java
// Jawaban pertanyaan 1 
if(nilai >=0 && nilai <= 100)
{
    if(nilai >= 90 && nilai <=100)
    {
        System.out.println("Nilai A, EXCELLENT!");
    }
    else if(nilai >= 80 && nilai <=89)
    {
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    }
    else if(nilai >= 60 && nilai <=79)
    {
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } 
    else if(nilai >= 50 && nilai <=59)
    {
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } 
    else
    {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} 
else if(nilai < 0)
{
    System.out.println("Nilai yang anda masukkan kurang dari 0");
}
else
{
    System.out.println("Nilai yang anda masukkan lebih dari 100");
}

/* Jawaban pertanyaan 2 
Untuk menjalankan sebuah kode dengan kondisi nilai lebih dari samadengan 0 dan kurang dari samadengan 100 
*/

/* Jawaban pertanyaan 3 
Output nya menjadi "Nilai E, Anda tidak lulus!" karena semua nilai yang diinput menjadi memenuhi kondisi yang pertama, yaitu nilai lebih dari samadengan 0 atau kurang dari samadengan 100. Sehingga nilai memenuhi salah satu kondisi tersebut. Setelah itu nilai masuk pada kondisi else.
*/
```

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
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besar penghasilan: ");
penghasilan = input.nextInt();
```

    Masukkan kategori: pebisnis
    Masukkan besar penghasilan: 5500000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equals("pekerja"))
{
    if(penghasilan <= 2000000)
    {
        pajak = 0.1;
    }
    else if(penghasilan <= 3000000)
    {
        pajak = 0.15;
    }
    else
    {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
}
else if(kategori.equals("pebisnis"))
{
    if(penghasilan <= 2500000)
    {
        pajak = 0.15;
    }
    else if(penghasilan <= 3500000)
    {
        pajak = 0.2;
    }
    else
    {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
}
else
{
    System.out.println("Kategori yang anda masukkan salah");
}
```

    Gaji bersih yang Anda terima: 4125000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2
>
> if(kategori.equals(" ")) digunakan untuk menentukan pernyataan dari kondisi kategori yang dimasukkan pengguna. Didalamnya lagi terdapat kondisi dari "penghasilan" yang telah dimasukkan pengguna. Disetiap kondisi ditentukan pajak yang berbeda-beda
    
    
##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

// Jawaban pertanyaan 1
Karena tipe data yang dioperasikan diakhir diubah menjadi int

// Jawaban pertanyaan 2
Untuk narrowing operasi dari double ke int

// Jawaban pertanyaan 3
Untuk mengabaikan penggunaan huruf besar atau kecil

// Jawaban pertanyaan 4
Hasilnya sama, karena input yang dimasukkan benar; equals digunakan sama seperti "=" hanya saja digunakan untuk string

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
double b1, b2, hasil;
char opr;

System.out.print("Masukkan bilangan pertama: ");
b1 = input.nextDouble();
System.out.print("Masukkan Operator (+, -, *, /): ");
opr = input.next().charAt(0);
System.out.print("Masukkan bilangan kedua: ");
b2 = input.nextDouble();

switch(opr){
    case '+':
    hasil = b1 + b2;
    System.out.println(b1 + " + " + b2 + " = " + hasil);
    break;
    case '-':
    hasil = b1 - b2;
    System.out.println(b1 + " - " + b2 + " = " + hasil);
    break;
    case '*':
    hasil = b1 * b2;
    System.out.println(b1 + " * " + b2 + " = " + hasil);
    break;
    case '/':
    hasil = b1 / b2;
    System.out.println(b1 + " / " + b2 + " = " + hasil);
    break;
    default:
    System.out.println("Operator yang Anda masukkan salah");
}
```

    Masukkan bilangan pertama: 3.4
    Inputkan Operator (+, -, *, /): /
    Inputkan bilangan kedua: 2.2
    3.4 / 2.2 = 1.5454545454545452

>Penjelasan
>
>switch(opr) artinya kondisi variabel "opr" yang dimasukkan dan dilanjut ke case ' ': "pernyataan" untuk menentukan operasi dari hasil akhir. Saat variabel "opr" yang dimasukkan selain (+, -, *, /) maka akan masuk kedalam kondisi default.

2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
double s1, s2, s3;

System.out.print("Masukkan sisi pertama: ");
s1 = input.nextDouble();
System.out.print("Masukkan sisi kedua: ");
s2 = input.nextDouble();
System.out.print("Masukkan sisi ketiga: ");
s3 = input.nextDouble();

if(s1 == s2 && s1 == s3)
{
    System.out.print("Segitiga sama sisi");
}
else if(s1 == s2 || s1 == s3)
{
    System.out.print("Segitiga sama kaki");
}
else
{
    System.out.print("Segitiga sembarang");
}
```

    Masukkan sisi pertama: 2
    Masukkan sisi kedua: 3
    Masukkan sisi ketiga: 2
    Segitiga sama kaki

>Penjelasan
>
>Kondisi pertama menggunakan "&&" yaitu sisi 1 samadengan sisi 2 dan sisi 1 samadengan sisi 3. Menggunakan "||" untuk kondisi bila sisi 1 samadengan sisi 2 atau sisi 1 samadengan sisi 3, jika salah satu benar dan satu salah. else jika kesemua sisi tidak sama

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
Scanner input = new Scanner(System.in);
int hMakan, ekspres;
String nMakan;
double biaya, hTotal;

System.out.print("Masukkan nama makanan: ");
nMakan = input.nextLine();
System.out.print("Masukkan harga makanan: Rp ");
hMakan = input.nextInt();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? ");
ekspres = input.nextInt();

if(ekspres == 1){
    if(hMakan >= 100000)
    {
        biaya = 55000;
    }
    else
    {
        biaya = 45000;
    }
}
else if(ekspres == 0)
{
    if(hMakan >= 100000)
    {
        biaya = 30000;
    }
    else
    {
        biaya = 20000;
    }
}
else
{
    System.out.println("Nilai salah");
}

hTotal = hMakan + biaya;

System.out.println("STRUK PEMBELIAN");
System.out.println(String.format("%s \t\t : Rp %s", nMakan, hMakan));
System.out.println("Biaya Pengiriman : Rp " + biaya);
System.out.println("TOTAL \t\t : Rp " + hTotal);
```

    Masukkan nama makanan: Mie
    Masukkan harga makanan: Rp 5000
    Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 0
    STRUK PEMBELIAN
    Mie              : Rp 5000
    Biaya Pengiriman : Rp 20000.0
    TOTAL 		     : Rp 25000.0

> Penjelasan
>
> if(ekspress = " ") digunakan untuk menentukan pernyataan dari kondisi layanan ekspres yang dimasukkan pengguna. Didalamnya lagi terdapat kondisi dari "harga makanan" yang telah dimasukkan pengguna. Disetiap kondisi ditentukan biaya pengiriman yang berbeda-beda

4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
Scanner input = new Scanner(System.in);
int umur, jTanggung;
String statK, statS;
double perBulan, biaya;

System.out.print("Masukkan umur: ");
umur = input.nextInt();

if(umur >= 18)
{
    input.nextLine();
    System.out.print("Masukkan status bekerja(bekerja, tidak): ");
    statK = input.nextLine();
    
    if(statK.equals("bekerja"))
    {
        System.out.print("Masukkan pendapatan per bulan: ");
        perBulan = input.nextDouble();
        System.out.print("Masukkan jumlah tanggungan: ");
        jTanggung = input.nextInt();
        biaya = perBulan / jTanggung;
        
        if(biaya < 300000)
        {
            System.out.print("Penduduk miskin");
        }
        else
        {
            System.out.print("Bukan penduduk miskin");
        }
    }
    else
    {
        System.out.print("Penduduk miskin");
    }
}
else
{
    input.nextLine();
    System.out.print("Masukkan status sekolah(sekolah, tidak): ");
    statS = input.nextLine();
    if(statS.equals("sekolah"))
    {
        System.out.print("Bukan penduduk miskin");
    }
    else
    {
        System.out.print("Penduduk miskin");
    }
}
```

    Masukkan umur: 18
    Masukkan status bekerja(bekerja, tidak): bekerja
    Masukkan pendapatan per bulan: 2000000
    Masukkan jumlah tanggungan: 6
    Bukan penduduk miskin

> Penjelasan
>
> if(umur >= ...) digunakan untuk menentukan pernyataan dari kondisi umur yang dimasukkan pengguna. Didalamnya dimasukkan perintah input dari status pengguna. Setelah itu terdapat kondisi dari "biaya" yang merupakan operasi dari input sebelumnya. Disetiap kondisi ditentukan antara penduduk miskin atau bukan
