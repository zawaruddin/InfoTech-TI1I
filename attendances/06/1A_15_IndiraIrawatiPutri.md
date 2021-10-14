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
Scanner input=new Scanner(System.in);
int nilai;
System.out.println("Masukkan nilai ujian (0-100): ");
nilai=input.nextInt();
```

    Masukkan nilai ujian (0-100): 
    105


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    }else if (nilai >= 80 && nilai <=89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    }else if (nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");   
    }else if (nilai >= 50 && nilai <=59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    }else{
        System.out.println("Nilai E, Anda tidak lulus!");
    }
}else {
    System.out.println("Nilai yang Anda masukkkan tidak valid!");
}

```

    Nilai A, EXCELLENT!


> Penjelasan kode program percobaan 1

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
// Jawaban pertanyaan
if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else if (nilai <=0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0!");
} else{
    System.out.println("Nilai yang Anda masukkan lebih dari 100!");
    }


```

    Nilai yang Anda masukkan lebih dari 100!


Digunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda. jika pernyataan ini bernilai benar (>=0 sampai <=100), pernyataan akan dijalankan. Jika pernyataan ternyata salah (< 0 dan > 100), maka akan langsung muncul informasi "Nilai yang Anda masukkan tidak valid!".


```Java
if(nilai >= 0 || nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    }else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B,  Pertahankan prestasi Anda!");
    }else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");   
    }else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    }else{
        System.out.println("Nilai E, Anda tidak lulus!");
    }
}else {
    System.out.println("Nilai yang Anda masukkkan tidak valid!");
}

// Output Nilai E, Anda tidak lulus!
// Karena jika menggunakan or/|| salah satu benar maka akan benar. Jadi ada jawabanya
```

    Nilai E, Anda tidak lulus!


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
Scanner input=new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak=0;

System.out.print("Masukkan kategori: ");
kategori=input.nextLine();
System.out.print("Masukkan besarnya penghasilan:");
penghasilan=input.nextInt();
```

    Masukkan kategori: pekerja
    Masukkan besarnya penghasilan:2048485


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <= 2000000){
        pajak=0.1;
    }else if (penghasilan<=3000000){
        pajak=0.15;
    }else {
        pajak=0.2;
    }
    gajiBersih=(int)(penghasilan-(penghasilan*pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
}else if (kategori.equalsIgnoreCase("pebisnis")){
    if(penghasilan<=2500000){
        pajak=0.15;
    }else if(penghasilan <= 3500000){
        pajak=0.2;
    }else{
        pajak=0.25;
    }
    gajiBersih=(int)(penghasilan-(penghasilan*pajak));
    System.out.println("Gaji bersih yang Anda terima: "+ gajiBersih);
}else {
    System.out.println("Kategori yang Anda masukkan salah!");
}

```

    Gaji bersih yang Anda terima: 3750000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2
5. Jalankan program di atas. Amati apa yang terjadi!
Keluar perintah:
Masukkan kategori:
Masukkan besarnya penghasilan:
setelah itu akan di prsoses otomatis keluar hasil gaji bersih
Gaji bersih yang Anda terima:

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?


```Java
// Jawaban pertanyaan
1. Gaji bersih yang Anda terima: 1741212, karena penghasilan <=3000000 maka mendapatkan potongang pajak=0.15.
2. Operasi penghitungan gaji bersih (angka gaji berupa bilangan bulat maka tipe datanya adalah int)
3. Saya memasukkan kategori=Pebisnis dan besarnya penghasilan=2000000, hasil gaji bersihnya adalah 1700000, 
karena diproses dikurangi pajak.Dengan menggunakan fungsi equalsIgnoreCase(), tidak akan melihat perbandingan dari segi hurufnya, 
besar ataupun kecil, yang terpenting nilai yang diinputkan user, sama dengan nilai yang sebenarnya
4. fungsi equals(), semua karakter dari kedua variable tersebut harus sama, meliputi huruf besar dan kecilnya, pada fungsi equals(), 
saat kita menginputkan data, tetapi ada salah satu atau beberpa huruf dengan ukuran berbeda, maka akan bernilai false
```

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
int bilangan, bilangan2, hasil;
char operator;

System.out.print("Inputkan Bilangan 1 :");
bilangan = input.nextInt();
System.out.print("Inputkan Operator (+, -, *, /) :");
operator = input.next().charAt(0);
System.out.print("Inputkan Bilangan 2 :");
bilangan2 = input.nextInt();

switch(operator) {
  case '+':
     hasil = bilangan + bilangan2;     
    break;
  case '-':
     hasil = bilangan - bilangan2;
    break;
  case '*':
     hasil = bilangan * bilangan2;
    break;
  case '/':
     hasil = bilangan / bilangan2;
    break;
  default:
    System.out.print("input operator salah");
}

if(operator == '+' || operator == '-' || operator == '*' || operator == '/') {
    System.out.print("Hasil: " + hasil);
}
```

    Inputkan Bilangan 1 :25
    Inputkan Operator (+, -, *, /) :*
    Inputkan Bilangan 2 :40
    Hasil: 1000

2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int sisi1,sisi2,sisi3;
String Hasil;
System.out.println("Masukkan sisi 1:...cm ");
sisi1 = input.nextInt();
System.out.println("Masukkan sisi 2:...cm ");
sisi2 = input.nextInt();
System.out.println("Masukkan sisi 3:...cm");
sisi3 = input.nextInt();

if(sisi1 == sisi2 && sisi1 == sisi3){
    System.out.println("Segitiga sama sisi");
} else if(sisi1 == sisi2 ){
    System.out.println("Segitiga sama kaki");
} else{
    System.out.println("Segitiga sembarang");
}
```

    Masukkan sisi 1:...cm 
    20
    Masukkan sisi 2:...cm 
    20
    Masukkan sisi 3:...cm
    21
    Segitiga sama kaki


## 3. Warung Padang Gembira meminta Anda membuat sebuah program untuk menerima pesanan dari internet. Program yang Anda buat meminta user untuk memasukkan nama makanan dan harga. Setelah itu, user ditawarkan untuk menggunakan pengiriman ekspres. Jika pengguna menolak, maka jenis pengiriman yang digunakan adalah pengiriman reguler. Biaya pengiriman reguler untuk harga makanan kurang dari Rp 100.000 adalah Rp 20.000, sedangkan untuk harga makanan sama dengan atau lebih dari Rp 100.000 biaya pengirimannya adalah Rp 30.000. Untuk jenis pengiriman ekspres, tambahkan biaya tambahan sebesar Rp 25.000 dari standar biaya pengiriman reguler. Tampilkan struk yang berisi nama makanan yang dibeli + harga, biaya pengiriman, dan total yang harus dibayar!
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
Scanner input = new Scanner(System.in);
String namaMakanan;
int pengirimanExpress;
double harga, total, biayaPengiriman;

System.out.print("Masukkan nama makanan:  ");
namaMakanan = input.nextLine();
System.out.print("Masukkan harga makanan:  ");
harga = input.nextDouble();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? ");
pengirimanExpress = input.nextInt();

if(pengirimanExpress == 0) {
    if(harga < 100.000) {
        biayaPengiriman = 20000;
    } else {
        biayaPengiriman = 30000;
    }
} else if(pengirimanExpress == 1){
    if(harga < 100.000) {
        biayaPengiriman = 45000;
    } else {
        biayaPengiriman = 55000;
    }
} else {
    System.out.println("Input anda salah");
}
total = biayaPengiriman + harga;
System.out.println("STRUK PEMBELIAN");
System.out.println(namaMakanan + "\t\tRp" + (double) harga);
System.out.println("Biaya pengiriman \tRp" + (double) biayaPengiriman);
System.out.println("TOTAL \t\t\tRp" + (double) total);
```

    Masukkan nama makanan:  tuna salad
    Masukkan harga makanan:  115000
    Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 1
    STRUK PEMBELIAN
    tuna salad		Rp115000.0
    Biaya pengiriman 	Rp55000.0
    TOTAL 			Rp170000.0


4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);

int umur;
double biayaHidup, pendapatanPerbulan, jumlahTanggungan;
String statusSekolah, statusBekerja, kategoriPenduduk;

System.out.print("Masukkan Umur: ");
umur = input.nextInt();

if(umur >= 18) {
    input.nextLine();
    System.out.print("Masukkan Status Bekerja (Aktif/Tidak Aktif): ");
    statusBekerja = input.nextLine();
    
    if(statusBekerja.equalsIgnoreCase("Aktif")) {
        System.out.print("Input jumlah pendapatan perbulan: ");
        pendapatanPerbulan = input.nextDouble();
        System.out.print("Input jumlah tanggungan: ");
        jumlahTanggungan = input.nextDouble();
        
        biayaHidup = pendapatanPerbulan/jumlahTanggungan;
        
        if(biayaHidup < 300000) {
            kategoriPenduduk = "Penduduk Miskin";
        } else {
            kategoriPenduduk = "Bukan Penduduk Miskin";
        }
    } else {
        kategoriPenduduk = "Penduduk Miskin";
    }
} else {
    System.out.print("Masukkan Status Sekolah (Aktif/Tidak Aktif): ");
    input.nextLine();
    statusSekolah = input.nextLine();
    
    if(statusSekolah.equalsIgnoreCase("Aktif")) {
        kategoriPenduduk = "Bukan Penduduk Miskin";
    } else {
        kategoriPenduduk = "Penduduk Miskin";
    }
}

System.out.println("Anda masuk dalam kategori penduduk: " + kategoriPenduduk);
```

    Masukkan Umur: 19
    Masukkan Status Bekerja (Aktif/Tidak Aktif): Aktif
    Input jumlah pendapatan perbulan: 20000000
    Input jumlah tanggungan: 2
    Anda masuk dalam kategori penduduk: Bukan Penduduk Miskin



```Java

```
