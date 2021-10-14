## JOBSHEET 5
//BAGUS TEJO WALUYO / 2131710076 / MI / 1A / 

## PEMILIHAN 1

### Tujuan

Mahasiswa mampu menyelesaikan permasalahan/studi kasus menggunakan sintaks pemilihan 1 dan mengimplemantasikannya dalam bahasa pemrogaman java.

### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1 : Penggunaan if

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

    <p align="left">
    <img width="351" height="460" src="images/01.png">
    </p>
    

> Flowchart diatas digunakan untuk menentukan bilangan ganjil/genap, selanjutnya kita akan membuat programnya berdasarkan
> flowchart di atas!

2. Tambahkan library Scanner, deklarasi Scanner, dan buat variabel bil untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int bil;
System.out.print("Masukkan sebuah bilangan : ");
bil = input.nextInt();

```

    Masukkan sebuah bilangan : 12


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
if(bil%2 == 0){
    System.out.println("Bilangan Genap");
} else {
    System.out.println("Bilangan Ganjil");
}

```

    Bilangan Genap


> Tuliskan penjelasan kode-kode di atas



##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil % 2 == 0) ? "Bilangan Genap" : "Bilangan Ganjil";
System.out.println(output);
```

    Bilangan Genap


2. Jalankan dan amatilah hasilnya!
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

#### JAWABAN

2. Hasil output program adalah Bilagan genap
3. Program dirubah menjadi pemilihan berbentuk ternary option agar lebih singkat/efisien dibanding if else karena hanya memiliki 2 kondisi.

> Jawab pertanyaan di bawah ini


#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
// Ketik kode program di atas di bawah sini
int nilai; 
System.out.print("Masukkan sebuah bilangan : ");
nilai = input.nextInt();

```

    Masukkan sebuah bilangan : 110


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
if(nilai >= 100) { 
    nilai += 10; 
} else {
    nilai -= 10; 
}
System.out.println("Hasil akhir nilai adalah " + nilai); 

```

    Hasil akhir nilai adalah 120


+ Jalankan program. Amati apa yang terjadi!

> Tuliskan penjelasan kode di atas



##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```

2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

##### Jawaban
1. nilai+=10 berfungsi untuk menambah bilangan nilai dengan +10 dan fungsi nilai-=10 berfungi untuk mengurangi bilangan nilai sejumlah 10 atau (-10)
    ```

##### 2. !!! HASIL MODIFIKASI PROGRAM BERADA DI BAWA !!!


```Java
int nilai1, nilai2; 
double rata; 

System.out.print("Masukkan sebuah bilangan 1 : ");
nilai = input.nextInt(); 
System.out.print("Masukkan sebuah bilangan 2 : ");
nilai2 = input.nextInt(); 

rata = (double) (nilai + nilai2)/2; 

if(rata >= 100) { 
    rata -= 5;
} else {
    System.out.println("Rata rata : " + rata); 
}
System.out.println("Rata rata >=100, rata rata -5 : " + rata);
```

    Masukkan sebuah bilangan 1 : 110
    Masukkan sebuah bilangan 2 : 120
    Rata rata >=100, rata rata -5 : 110.0


> Tuliskan jawaban di sini



#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
import java.util.Scanner;
int umur;
Scanner input = new Scanner(System.in);
System.out.print("Masukkan umur Anda : ");
umur = input.nextInt();
```

    Masukkan umur Anda : 19


+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
if(umur > 60)
    System.out.println("Lansia"); 
else if(umur > 45)
    System.out.println("Tua");
else if(umur > 17)
    System.out.println("Dewasa");
else if(umur > 5) 
    System.out.println("Anak-anak");
else
    System.out.println("Balita");
```

    Dewasa


+ Jalankan program dan amati apa yang terjadi!

##### Percobaan 4 : Penggunaan switch-case

#### Waktu percobaan : 40 menit

1. Deklarasikan Scanner
1. Buatlah variabel-variabel berikut

    ![](images/10.png)


```Java
// Ketik kode program di atas di bawah sini
Scanner sc = new Scanner(System.in);
double angka1, angka2, hasil;
char operator;
```

3. Kode program untuk meminta inputan dari keyboard

    ![](images/11.png)


```Java
// Ketik kode program di atas di bawah sini
System.out.print("Masukkan angka pertama: "); 
angka1 = sc.nextDouble(); 
System.out.print("Masukkan angka kedua: "); 
angka2 = sc.nextDouble();
System.out.print("Masukkan operator ( + - * / ) : ");
operator = sc.next().charAt(0);
```

    Masukkan angka pertama: 7
    Masukkan angka kedua: 3
    Masukkan operator ( + - * / ) : *


> Tuliskan penjelasan kode-kode di atas



4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
switch(operator){ 
    case '+' :
        hasil = angka1 + angka2;
        System.out.println(angka1 + " + " + angka2 + " = " + hasil);
    break;
    case '-' :
        hasil = angka1 - angka2;
        System.out.println(angka1 + " — " + angka2 + " = " + hasil);
    break;
    case '*' :
        hasil = angka1 * angka2;
        System.out.println(angka1 + " * " + angka2 + " = " + hasil);
    break;
    case '/' :
        hasil = angka1 / angka2; 
        System.out.println(angka1 + " / " + angka2 + " = " + hasil);
    break;
    default:
        System.out.println("Operator yang Anda masukkan salah");
}
```

    7.0 * 3.0 = 21.0


5. Jalankan program. Amati apa yang terjadi!

> Tuliskan penjelasan kode di atas



##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```

> Tuliskan jawaban di atas



#### Jawaban
1. Break untuk menghentikan pada suatu alur bagian program.
   
   Default digunakan untuk menilan jika permintaan program tidak dapat   dipenuhi.
   
   
2. Menjadikan karakter sebagai inputan dari variabel operator.

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.



```Java
//ketik kode program dan lampirkan hasilnya di sini
```

2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya di sini

import java.util.Scanner;
Scanner in = new Scanner(System.in); 
int umur; 

System.out.print("Masukkan umur Anda saat ini : "); 
umur = in.nextInt();

if(umur >= 17) { 
    System.out.println("Boleh berkendara"); 
} else {
    System.out.println("Tidak boleh berkendara");
}

```

    Masukkan umur Anda saat ini : 19
    Boleh berkendara


3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!


```Java
//ketik kode program dan lampirkan hasilnya di sini
import java.util.Scanner;

Scanner in = new Scanner(System.in);
double uas, uts, kuis, tugas, nilai_akhir;

System.out.print("Masukan nilai UAS : "); 
uas = in.nextDouble(); 
System.out.print("Masukan nilai UTS : "); 
uts = in.nextDouble(); 
System.out.print("Masukan nilai Kuis : "); 
kuis = in.nextDouble(); 
System.out.print("Masukan nilai Tugas : "); 
tugas = in.nextDouble(); 

uas = uas * ((double) 40 / 100); 
uts = uts * ((double) 30 / 100); 
kuis = kuis * ((double) 10 / 100);
tugas = tugas * ((double) 20 / 100);

nilai_akhir = uas + uts + kuis + tugas; 

System.out.print("\n NILAI AKHIR ANDA : " + nilai_akhir); 
    if (nilai_akhir <= 65) { 
        System.out.println("\n\n MAAF, \n ANDA HARUS REMIDI"); 
    } else { 
    System.out.println("\n\n Selamat, \n ANDA DINYATAKAN LULUS"); 
}
```

    Masukan nilai UAS : 85
    Masukan nilai UTS : 90
    Masukan nilai Kuis : 95
    Masukan nilai Tugas : 100
    
     NILAI AKHIR ANDA : 90.5
    
     Selamat, 
     ANDA DINYATAKAN LULUS


4. Sebuah toko memberikan diskon kepada pelanggannya dengan ketentuan sebagai berikut:

| Total Belanja     | Potongan |
|-------------------|----------|
| >Rp. 200.000,00   | 2%       |
| >Rp. 500.000,00   | 5%       |
| >Rp. 1.000.000,00 | 10%      |

> Total belanja diperoleh dari pembelian tiga barang yaitu barang A, barang B, dan barang C. Ketika menginputkan harga barang juga menginputkan jumlah barang yang dibeli.

Contoh outputnya
```
Masukkan harga barang A   :100000
Masukkan jumlah barang A  :10
Masukkan harga barang B   :250000
Masukkan jumlah barang B  :5
Masukkan harga barang C   :150000
Masukkan jumlah barang C  :1
---------------------------------------------
                Struk total
---------------------------------------------
Nama Barang 	| 	Harga 	| 	Jumlah 	| 	Total
Barang A            100000         10        1000000   
Barang B            250000         5         1250000   
Barang C            150000         1         150000    
Total       :2400000
Diskon      :240000.0
Total Bayar :2160000.0
```


```Java
//ketik kode program dan lampirkan hasilnya di sini

import java.util.Scanner;
Scanner in = new Scanner(System.in); 

int hargaA, hargaB, hargaC; 
int jumlahA, jumlahB, jumlahC;
int total;
double diskon, bayar;

System.out.print("Masukkan harga barang A : "); 
hargaA = in.nextInt(); 
System.out.print("Masukkan jumlah barang A : ");
jumlahA = in.nextInt(); 
System.out.print("Masukkan harga barang B : ");
hargaB = in.nextInt(); 
System.out.print("Masukkan jumlah barang B : ");
jumlahB = in.nextInt();
System.out.print("Masukkan harga barang C : "); 
hargaC = in.nextInt();
System.out.print("Masukkan jumlah barang C : "); 
jumlahC = in.nextInt(); 

    total = (hargaA * jumlahA) + (hargaB * jumlahB) + (hargaC * jumlahC); 

    if(total >= 1000000) { 
      diskon = (double) 10/100;
    } else if(total >= 500000) {
      diskon = (double) 5/100;  
    } else if(total >= 200000) {
      diskon = (double) 2/100;  
    } else { 
        diskon = 0; 
    }

bayar = total - total * diskon; 

System.out.println("\n\n");
System.out.println("----------------------------------------------------------------------");
System.out.println("                             Struk Total                              ");
System.out.println("----------------------------------------------------------------------");
System.out.println("Nama Barang\t|\tHarga\t|\tJumlah\t|\tTotal"); 
System.out.println(String.format("Barang A\t\t%s\t%s\t\t%s",hargaA, jumlahA, hargaA*jumlahA)); 
System.out.println(String.format("Barang B\t\t%s\t%s\t\t%s",hargaB, jumlahB, hargaB*jumlahB)); 
System.out.println(String.format("Barang A\t\t%s\t%s\t\t%s",hargaC, jumlahC, hargaC*jumlahC)); 
System.out.println("Total\t:" + total); 
System.out.println("Diskon\t:" + (total * diskon)); 
System.out.println("Total\t:" + bayar); 

```

    Masukkan harga barang A : 100000
    Masukkan jumlah barang A : 10
    Masukkan harga barang B : 250000
    Masukkan jumlah barang B : 5
    Masukkan harga barang C : 150000
    Masukkan jumlah barang C : 1
    
    
    
    ----------------------------------------------------------------------
                                 Struk Total                              
    ----------------------------------------------------------------------
    Nama Barang	|	Harga	|	Jumlah	|	Total
    Barang A		100000	10		1000000
    Barang B		250000	5		1250000
    Barang A		150000	1		150000
    Total	:2400000
    Diskon	:240000.0
    Total	:2160000.0



```Java

```
