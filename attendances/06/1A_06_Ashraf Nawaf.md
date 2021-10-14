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
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt(); 
```

    Masukkan nilai ujian (0-100): 90


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid!");
}
```

    Nilai A, EXCELLENT!


> Penjelasan kode program percobaan 1

if(nilai >= 90 && nilai <= 100){ // Kondisi yang akan dijalankan apabila kondisi utama bernilai true
    System.out.println("Nilai A, EXCELLENT!");
    } else { // Ketika tidak ada kondisi yang benar, maka kode blok program dibawah akan dijalankan
    System.out.println("Nilai E, Anda tidak lulus!");
    }

} else { // Ketika kondisi utama tidak memenuhi syarat, maka perintah dibawah akan dieksekusi
System.out.println("Nilai yang Anda masukkan tidak valid!");
}


##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
1. if(nilai < 0){
    System.out.println("Nilai yang Anda masukkan kurang dari 0");
} else {
    if(nilai > 100) {
        System.out.println("Nilai yang Anda masukkan lebih dari 100");
    } else {
        if(nilai >= 90 && nilai <= 100){
            System.out.println("Nilai A, EXCELLENT!");
        } else if (nilai >= 80 && nilai <= 89){
            System.out.println("Nilai B, Pertahankan prestasi Anda!");
        } else if (nilai >= 60 && nilai <= 79){
            System.out.println("Nilai C, Tingkatkan prestasi Anda!");
        } else if (nilai >= 50 && nilai <= 59){
            System.out.println("Nilai D, Tingkatkan belajar Anda!");
        } else {
            System.out.println("Nilai E, Anda tidak lulus!");
        }
    }
}
```

2. perintah untuk mengecek apakah nilai tersebut antara 0 - 100
3. Tidak lulus, karena kondisi awal pada if(nilai >= 90 && nilai <= 100){ bernilai benar, maka program akan berlanjut, lalu tidak ditemukan kondisi yang benar dan akhirnya muncul output dari kondisi else

#### Percobaan 2

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

![](images/02.png)

> Flowchart tersebut digunakan untuk menghitung gaji bersih seseorang setelah dipotong pajak sesuai dengan kategorinya (pekerja dan pebisnis) dan besarnya penghasilan. 

2. Tambahkan library Scanner dan deklarasi Scanner

3. Deklarasikan variabel kategori, penghasilan, gajiBersih, dan pajak

    ![](images/05.png)


```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.println("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
```

    Masukkan kategori: pekerja
    Masukkan besarnya penghasilan: 
    2000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
if(kategori.equalsIgnoreCase("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else if (kategori.equalsIgnoreCase ("Pebisnis")){
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

    Gaji bersih yang Anda terima: 1800000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2

if(kategori.equalsIgnoreCase ("pekerja")){ // menggunakan fungsi equalsIgnoreCase untuk melakukan perbandingan antar string

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

// Jawaban pertanyaan
1. Karena tipe data Integer tidak mengeluarkan output belakang koma
2. fungsinya ialah casting/mengubah tipedata dari hasil double/float menjadi integer
3. fungsi equalsIgnoreCase untuk melakukan perbandingan antar string tanpa terpengaruh oleh kapital dan tidaknya huruf
4. fungsi equals untuk melakukan perbandingan antar string dan terpengaruh oleh kapital dan tidaknya huruf

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

2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
Scanner input = new Scanner(System.in);
int panjang, panjang2, panjang3;
String objekSegitiga;
System.out.print("Inputkan panjang 1 (cm):");
panjang = input.nextInt();
System.out.print("Inputkan panjang 2 (cm):");
panjang2 = input.nextInt();
System.out.print("Inputkan panjang 3 (cm):");
panjang3 = input.nextInt();

if((panjang == panjang2)  && (panjang2 == panjang3) && (panjang3 == panjang)) {
    objekSegitiga = "Sama Sisi";
} else if((panjang == panjang2) || (panjang2 == panjang3) || (panjang3 == panjang)) {
    objekSegitiga = "Sama Kaki";
} else {
    objekSegitiga = "Sembarang";
}

System.out.print("Tipe Segitiga: " + objekSegitiga);
```

    Inputkan panjang 1 (cm):20
    Inputkan panjang 2 (cm):30
    Inputkan panjang 3 (cm):20
    Tipe Segitiga: Sama Kaki
```

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

4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
```
