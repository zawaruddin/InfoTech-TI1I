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

    Masukkan nilai ujian (0-100): 105


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 || nilai <=100){
    if (nilai >= 90 && nilai <=100) {
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <=89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan belajar Anda!");
    } else if (nilai >= 50 && nilai <=59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else if (nilai <0 ) {
    System.out.print("Nilai yang Anda masukkan kurang dari 0");
} else if (nilai >100) {
    System.out.print("Nilai yang Anda masukkan lebih dari 100");
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid!");
}
```

    Nilai E, Anda tidak lulus!


user menginputkan nilai, setelah nilai didapat, sistem akan menjalankan kondisi , jika nilai lebih dari samadengan 90 kurang dari samadengan 100 maka output akan muncul A, excellent, jika nilai lebih dari samadengan 80 dan kurang dari samadengan 89 maka akan memunculkan output nilai B, pertahankan prestasi anda, jika nilai lebih dari samadengan 60 kurang dari samadengan 79 maka output adalah nilai C,tingkatkan belajar anda, jika nilai lebihdari samadengan 50 dan kurangdari samadengan 59 maka output maka output adalah nilai D, tingkatkan belajar Anda, selain nilai diatas akan muncul nilai E, anda tidak lulus.

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?

// Jawaban pertanyaan
1. -
2. fungsi sintaks if(nilai >=0 && nilai <=100)adalah jika nilai yang dimasukkan adalah lebih besar samadengan 0 dan lebih kcil darisamadengan 100,0-100 maka kondisi akan dijalankan.
3. karena menggunakan operator OR, operator OR akan dijalankan jika salah satu bernilai true, 105 true karena lebih besar sama dengan 0,dan pada kondisi bersarang tidak ditemukan yang cocok, jadi output akan keluar (nilai E,Anda tidak lulus)

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

    Masukkan kategori: Pebisnis
    Masukkan besarnya penghasilan: 2000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if (kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <=2000000){
        pajak = 0.1;
    } else if (penghasilan <=3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int)(penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
    
} else if (kategori.equals ("pebisnis")) {
    if (penghasilan <=2500000){
        pajak = 0.15;
    } else if (penghasilan <=3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int)(penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah");
}
```

    Kategori yang Anda masukkan salah


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2
membuat tipedata string untuk menampung data dan interger untuk menampung angka, setelah data ditampung kemudian dijalankan dan dilakukan pengecekan kondisi, jika kondisi kategori dimasukkan "pekerja" maka kondisi pekerja akan dijalankan, jika kondisi kategori dimasukkan "pebisnis" maka kondisi pebisnis akan dijalankan, jika tidak ada yang sama maka system akan mengeluarkan output "kategori yang Anda masukkan salah"..Pada kondisi pekerja dilakukan pengecekan kondisi lagi didalamnya, pengecekan penghasilan jika penghasilan lebih kecil samadengan 2000000 maka pajak yang di munculkan adalah 0,1, jika penghasilan lebih kecil samadengan 3000000 maka pajak yang dimunculkan adalah 0.15 jika selain dari itu maka pajak yang di munculkan adalah 0,2.  pada kategori pebisnis juga dicek jika penghasilan kurang dari samadengan 2500000 maka pajak yang berlaku adalah 0,15 jia penghasilan kurang dari samadengan 3500000 maka pajak yang berlaku adalah 0,2 . setelah semua data didapatkan akan di lakukan kalkulasi gajibersih dari penghasilan dikuranggi pajak.

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

// Jawaban pertanyaan
1.angka dibelakang koma tidak ditampilkan karena tipe datanya int, jika tipe data double/float maka angka dibelakang koma akan ditampilkan
2.berfungsi sebgai perubahan tipe data / narrowing casting ke tipe data interger
3.kegunaan equalsIgnoreCase adalah untuk menentukan nilai yang diinputkan sama meski besar kecilnya 
4.data tidak akan menerima dan outputnya adalah tidak ada kategori,fungsi equals adalah menentukan nilai yang dimasukkan apakah sama, jika berbeda meski pada besar kecil sistem tidak akan menerima.maka digunakan equalsIgnoreCase

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
Scanner sc = new Scanner(System.in);

float bil1,bil2, total;
String operator;

System.out.print("Masukkan bilangan pertama: ");
bil1 = sc.nextFloat();
System.out.print("Masukkan operator (+,-,*,/): ");
operator = sc.next();
System.out.print("Masukkan bilangan kedua: ");
bil2 = sc.nextFloat();

switch(operator){
    case "+" :
       total = bil1 + bil2;
        System.out.println(bil1 + " + " + bil2 + " = " + total);
    break;
    case "-" :
       total = bil1 - bil2;
        System.out.println(bil1 + " - " + bil2 + " = " + total);
    break;
    case "*" :
       total = bil1 * bil2;
        System.out.println(bil1 + " * " + bil2 + " = " + total);
    break;
    case "/" :
       total = bil1 / bil2;
        System.out.println(bil1 + " / " + bil2 + " = " + total);
    break;
    default :
        System.out.print("Operator tidak ditemukan!");
}
```

    Masukkan bilangan pertama: 2.5
    Masukkan operator (+,-,*,/): *
    Masukkan bilangan kedua: 4
    2.5 * 4.0 = 10.0


2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner sc = new Scanner(System.in);

int a,b,c;
System.out.print("Masukkan panjang A: ");
a = sc.nextInt();
System.out.print("Masukkan panjang B: ");
b = sc.nextInt();
System.out.print("Masukkan panjang C: ");
c = sc.nextInt();

if ((a == b) && (b == c)) {
    System.out.println("sisi A: " + a + " sisi B: " + b +" sisi C: " + c +" merupakan segitiga sama sisi");
} else if ((a == b) || (b == c)) {
    System.out.println("sisi A: " + a + " sisi B: " + b +" sisi C: " + c +" merupakan segitiga sama kaki");
} else {
    System.out.println("sisi A: " + a + " sisi B: " + b +" sisi C:" + c +" merupakan segitiga sembarang");
}
```

    Masukkan panjang A: 5
    Masukkan panjang B: 4
    Masukkan panjang C: 3
    sisi A: 5 sisi B: 4 sisi C:3 merupakan segitiga sembarang


###### 3. Warung Padang Gembira meminta Anda membuat sebuah program untuk menerima pesanan dari internet. Program yang Anda buat meminta user untuk memasukkan nama makanan dan harga. Setelah itu, user ditawarkan untuk menggunakan pengiriman ekspres. Jika pengguna menolak, maka jenis pengiriman yang digunakan adalah pengiriman reguler. Biaya pengiriman reguler untuk harga makanan kurang dari Rp 100.000 adalah Rp 20.000, sedangkan untuk harga makanan sama dengan atau lebih dari Rp 100.000 biaya pengirimannya adalah Rp 30.000. Untuk jenis pengiriman ekspres, tambahkan biaya tambahan sebesar Rp 25.000 dari standar biaya pengiriman reguler. Tampilkan struk yang berisi nama makanan yang dibeli + harga, biaya pengiriman, dan total yang harus dibayar!
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
Scanner sc = new Scanner(System.in);
String namaMakanan;
int hargaMakanan, biayaKirim, total, operator;

System.out.print("Masukkan nama makanan: ");
namaMakanan = sc.nextLine();
System.out.print("Masukkan harga makanan: Rp. ");
hargaMakanan = sc.nextInt();
System.out.print("Apakah anda ingin pengiriman ekspres (0 = tidak, 1= ya)? ");
operator = sc.nextInt();

if((operator == 0) || (operator == 1)){
    if((operator == 0) && (hargaMakanan < 100000)){
        biayaKirim = 20000;
    } else if((operator == 0) && (hargaMakanan >= 100000)){
        biayaKirim = 30000;
    } else if((operator == 1) && (hargaMakanan < 100000)){
        biayaKirim = 45000;
    } else if((operator == 1) && (hargaMakanan >= 100000)){
        biayaKirim = 55000;
    }
    total = hargaMakanan + biayaKirim;
} else {
    System.out.println("Pengiriman salah!");
}

System.out.print("\n");
System.out.println("STRUK PEMBELIAN");
System.out.println(namaMakanan + "\t : Rp. " + hargaMakanan);
System.out.println("Biaya pengiriman : Rp. " + biayaKirim);
System.out.println("TOTAL \t\t : Rp. " + total);
```

    Masukkan nama makanan: tuna salad
    Masukkan harga makanan: Rp. 115000
    Apakah anda ingin pengiriman ekspres (0 = tidak, 1= ya)? 0
    
    STRUK PEMBELIAN
    tuna salad	 : Rp. 115000
    Biaya pengiriman : Rp. 30000
    TOTAL 		 : Rp. 145000


## 4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner sc = new Scanner(System.in);

int umur, pendapatan, tanggungan, biayaHidup;
String operator;

System.out.print("Masukkan umur Anda: ");
umur = sc.nextInt();

if (umur >= 18){
    Scanner input = new Scanner(System.in);
    System.out.print("Masih bekerja? (Y/X):");
    operator = input.nextLine();
    
    if (operator.equalsIgnoreCase ("Y")){
        System.out.print("Masukkan jumlah pendapatan perbulan: Rp.");
        pendapatan = input.nextInt();
        System.out.print("Masukkan jumlah anak :");
        tanggungan = input.nextInt();
        
        biayaHidup = pendapatan/tanggungan;
        
        if (biayaHidup < 300000) {
            System.out.print("Bukan penduduk miskin");
        } else {
            System.out.print("Penduduk miskin");
        }
    } else if (operator.equalsIgnoreCase ("X")){ 
        System.out.print("penduduk miskin");
    } else {
        System.out.print("Jawaban tidak ada!");
    }
} else {
    Scanner input = new Scanner(System.in);
    System.out.print("Masih bersekolah? (Y/X):");
    operator = input.nextLine();
    
    if (operator.equalsIgnoreCase ("Y")){
        System.out.print("Bukan penduduk miskin");
    } else if (operator.equalsIgnoreCase ("X")) {
        System.out.print("Penduduk miskin");
    } else {
        System.out.print("Jawaban tidak ada!");
    }
}
```

    Masukkan umur Anda: 29
    Masih bekerja? (Y/X):y
    Masukkan jumlah pendapatan perbulan: Rp.300000
    Masukkan jumlah anak :2
    Bukan penduduk miskin

## 


```Java

```
