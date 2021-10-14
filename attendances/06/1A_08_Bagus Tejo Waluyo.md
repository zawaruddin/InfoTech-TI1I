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
System.out.print("Masukan nilai ujian (0-100) : ");
nilai = input.nextInt();
```

    Masukan nilai ujian (0-100) : 75


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 && nilai <= 100){
    if (nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan Prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda TIDAK LULUS!");
    }
} else {
    System.out.println("Nilai yang Anda masukan tidak valid !!!");
}
```

    Nilai C, Tingkatkan prestasi Anda!


> #### Penjelasan kode program percobaan 1

Ada satu inputan yaitu variabel nilai yang bertipe data interger.

Program digunakan untuk melakukan klasifikasi nilai. Untuk memfilter nilai digunakan operasi && atau AND. Jika nilai yang diinputkan merupakan angka bernilai 0-100 maka akan dilanjutkan ke blog program lanjutan. Yaitu jika nilai 90-100 klasifikasi nilai A Excellent. Jika nilai 80-89 maka klasifikasi nilai B... dan seterusnya. Jika inputan tidak berupa angka rentan 0-100 maka akan menampilkan pesan "Nilai yang Anda masukan tidak valid !!!".


##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?

##### Jawaban No 1


```Java
// Ketik kode di sini modifikasi
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukan nilai ujian (0-100) : ");
nilai = input.nextInt();

if(nilai >= 0 && nilai <= 100){
    if (nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan Prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda TIDAK LULUS!");
    }
} else if (nilai < 0){
    System.out.println("Nilai yang Anda masukan kurang dari 0 !!!");
} else if (nilai > 100){
    System.out.println("Nilai yang Anda masukan lebih dari 100 !!!");
} else {
    System.out.println("Nilai yang Anda masukan tidak valid !!!");
}



```

    Masukan nilai ujian (0-100) : 125
    Nilai yang Anda masukan lebih dari 100 !!!


##### Jawaban

2. Fungsi sintaks if (nilai >= 0 && nilai <= 100) adalah menyeleksi inputan apakah memiliki nilai >= 0 dan <=100.

3. Ketika operator && dirubah || pada sintaks if (nilai >= 0 && nilai <= 100) yang seharusnya nilai pada variabel "nilai" harus memenuhi kedua syarat menjadi boleh hanya memenuhi salah satu syarat karena || merupakan operator logic OR.


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

System.out.print("Masukkan kategori : ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan : ");
penghasilan = input.nextInt();
```

    Masukkan kategori : pebisnis
    Masukkan besarnya penghasilan : 2000000


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
    System.out.println("Gaji bersih yang Anda terima : "+ gajiBersih);
    
} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima : "+ gajiBersih);
    
} else {
    System.out.println("Kategori yang Anda masukkan salah !!!");
}
```

    Gaji bersih yang Anda terima : 1700000


5. Jalankan program di atas. Amati apa yang terjadi!

> #### Penjelasan kode program percobaan 2

Ada beberapa inputan :
1. kategori yang bernilai String
2. penghasilan berupa interger.


Program yang digunakan untuk menghitung gaji bersis yang diterima. Pada awal user memasukan kategori jabatannya dan besaran pendapatan yang kemudian difiler menuju blok program sesuai inputan menggunakan qualsIgnoreCase. Dilanjut ada blok program akan difilter kembali menggunakan if, else if, else berdasarkan jumlah pendapatan yang kemudian didalam blok program itu dilakukan proses perhitungan.


##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

##### Jawaban

1. Angka di belakang koma tidak ditampilkan karen tipe variabel gajiBersih berupa interger yang dimana digunakan untuk bilangan bulat Jadi angka dibelakang koma tidak ditampilkan.

2. Fungsi dari (int) pada sintaks gajiBersih = (int) (penghasilan - (penghasilan * pajak)); adalah pada bagian (int) melakukan casting data dari

3.	equalsIgnoreCase adalah method yang digunakan untuk membandingkan string ke objek tertentu dengan fleksibel dimana besar kecil huruf tidak mempengaruhi program.

4.	Equals juga method untuk membandingkan atau compare dua objek apakah memiliki sama atau tidak secara sepesifik dan kongkret dimana besar kecil huruf sangat berpengaruh pada hasil. 
##### Kode program dibawah ini



```Java
// Jawaban pertanyaan NO 4
import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori : ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan : ");
penghasilan = input.nextInt();

if(kategori.equals ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima : "+ gajiBersih);
    
} else if (kategori.equals ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima : "+ gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah !!!");
}
```

    Masukkan kategori : pebisnis
    Masukkan besarnya penghasilan : 2000000
    Gaji bersih yang Anda terima : 1700000


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
double bil1, bil2, hasil;
char operator;

System.out.print("Masukkan bilangan pertama : "); 
bil1 = sc.nextDouble(); 
System.out.print("Masukkan operator ( + - * / ) : ");
operator = sc.next().charAt(0);
System.out.print("Masukkan bilangan kedua : "); 
bil2 = sc.nextDouble();

switch(operator){ 
    case '+' :
        hasil = bil1 + bil2;
        System.out.println(bil1 + " + " + bil2 + " = " + hasil);
    break;
    case '-' :
        hasil = bil1 - bil2;
        System.out.println(bil1 + " — " + bil2 + " = " + hasil);
    break;
    case '*' :
        hasil = bil1 * bil2;
        System.out.println(bil1 + " * " + bil2 + " = " + hasil);
    break;
    case '/' :
        hasil = bil1 / bil2; 
        System.out.println(bil1 + " / " + bil2 + " = " + hasil);
    break;
    default:
        System.out.println("Operator yang Anda masukkan salah");
}

```

    Masukkan bilangan pertama : 2.5
    Masukkan operator ( + - * / ) : *
    Masukkan bilangan kedua : 4
    2.5 * 4.0 = 10.0


2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
double sisi1, sisi2, sisi3;

System.out.print("Masukkan sisi pertama : "); 
sisi1 = sc.nextDouble();
System.out.print("Masukkan sisi kedua : "); 
sisi2 = sc.nextDouble();
System.out.print("Masukkan sisi ketiga : "); 
sisi3 = sc.nextDouble();


if ((sisi1 == 0) || (sisi2 == 0) || (sisi3 == 0)){
    System.out.println("Bukan Segitiga");
} else if ((sisi1 == sisi2) && (sisi3 == sisi1)){
    System.out.println("Segitiga Sama Sisi");
} else if ((sisi1 == sisi2) || (sisi1 == sisi3) || (sisi2 == sisi3)){
    System.out.println("Segitiga Sama Kaki");
} else {
    System.out.println("Segitiga Sembarang");
}
```

    Masukkan sisi pertama : 10
    Masukkan sisi kedua : 20
    Masukkan sisi ketiga : 5
    Segitiga Sembarang


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
Scanner sc = new Scanner(System.in);
String namaMakanan;
int hargaMakanan, total;
int ekspres, biaya;

System.out.print("Masukkan nama makanan : ");
namaMakanan = sc.nextLine();
System.out.print("Masukkan harga makanan : ");
hargaMakanan = sc.nextInt();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? ");
ekspres = sc.nextInt();

if((ekspres == 0) || (ekspres == 1)){
    if((ekspres == 0) && (hargaMakanan < 100000)){
        biaya = 20000;
    } else if((ekspres == 0) && (hargaMakanan >= 100000)){
        biaya = 30000;
    } else if((ekspres == 1) && (hargaMakanan < 100000)){
        biaya = 45000;
    } else if((ekspres == 1) && (hargaMakanan >= 100000)){
        biaya = 55000;
    }
    total = hargaMakanan + biaya;
} else {
    System.out.println("INPUT JENIS PENGIRIMAN SALAH !!! ");
}

System.out.println("\n");
System.out.println("STRUK PEMBELIAN");
System.out.println("\n");
System.out.println(namaMakanan+ "\t\t" + "Rp " + hargaMakanan);
System.out.println("Biaya pengiriman\t" + "Rp " + biaya);
System.out.println("TOTAL\t\t\t" + "Rp " + total)
```

    Masukkan nama makanan : Tuna salad
    Masukkan harga makanan : 115000
    Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? 0
    
    
    STRUK PEMBELIAN
    
    
    Tuna salad		Rp 115000
    Biaya pengiriman	Rp 30000
    TOTAL			Rp 145000



```Java
//OUTPUT2
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
String namaMakanan;
int hargaMakanan, total;
int ekspres, biaya;

System.out.print("Masukkan nama makanan : ");
namaMakanan = sc.nextLine();
System.out.print("Masukkan harga makanan : ");
hargaMakanan = sc.nextInt();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? ");
ekspres = sc.nextInt();

if((ekspres == 0) || (ekspres == 1)){
    if((ekspres == 0) && (hargaMakanan < 100000)){
        biaya = 20000;
    } else if((ekspres == 0) && (hargaMakanan >= 100000)){
        biaya = 30000;
    } else if((ekspres == 1) && (hargaMakanan < 100000)){
        biaya = 45000;
    } else if((ekspres == 1) && (hargaMakanan >= 100000)){
        biaya = 55000;
    }
    total = hargaMakanan + biaya;
} else {
    System.out.println("INPUT JENIS PENGIRIMAN SALAH !!! ");
}

System.out.println("\n");
System.out.println("STRUK PEMBELIAN");
System.out.println("\n");
System.out.println(namaMakanan+ "\t\t" + "Rp " + hargaMakanan);
System.out.println("Biaya pengiriman\t" + "Rp " + biaya);
System.out.println("TOTAL\t\t\t" + "Rp " + total)
```

    Masukkan nama makanan : Beef Bulgogi
    Masukkan harga makanan : 78000
    Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? 1
    
    
    STRUK PEMBELIAN
    
    
    Beef Bulgogi		Rp 78000
    Biaya pengiriman	Rp 45000
    TOTAL			Rp 123000


4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
int umur, tanggungan, pendapatan;
Double biayaHidup;
String statusKerja, statusSekolah;

System.out.print("Masukkan umur Anda : ");
umur = sc.nextInt();

if(umur >= 18){
    
    Scanner in = new Scanner(System.in);
    System.out.print("Masukkan status bekerja (sudah bekerja / tidak bekerja) : ");
    statusKerja = in.nextLine();
    
    if(statusKerja.equalsIgnoreCase ("sudah bekerja")){
        
        System.out.print("Masukkan pendapatan perbulan : ");
        pendapatan = sc.nextInt();
        System.out.print("Masukkan jumlah tanggungan : ");
        tanggungan = sc.nextInt();
        biayaHidup = (double) (pendapatan/tanggungan);
        
        if(biayaHidup < 300000){
            System.out.println("Penduduk Miskin");
        } else {
            System.out.println("Bukan Penduduk Miskin");
        }
        
    } else if(statusKerja.equalsIgnoreCase ("tidak bekerja")){
        System.out.println("Penduduk Miskin");
    }

} else if (umur < 18) {
    System.out.print("Masukkan Status Sekolah (masih sekolah / tidak sekolah) : ");
    statusSekolah = sc.nextLine();
    
    if (statusSekolah.equalsIgnoreCase ("masih sekolah")){
        System.out.println("Bukan Penduduk Miskin");
    } else if (statusSekolah.equalsIgnoreCase ("tidak sekolah")) {
        System.out.println("Penduduk Miskin");
    }
    
} else {
    System.out.println("INPUT ANDA TIDAK VALID !!!");
}


```

    Masukkan umur Anda : 19
    Masukkan status bekerja (sudah bekerja / tidak bekerja) : sudah bekerja
    Masukkan pendapatan perbulan : 12000000
    Masukkan jumlah tanggungan : 3
    Bukan Penduduk Miskin



```Java

```
