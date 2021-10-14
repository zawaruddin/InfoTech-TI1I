## JOBSHEET 5

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
<<<<<<< HEAD
    <img width="351" height="460" src="2131710156/01.png">
=======
    <img width="351" height="460" src="images/01.png">
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213
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
System.out.print("Masukkan sebuah bilangan: ");
bil = input.nextInt();
```

    Masukkan sebuah bilangan: 11


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
<<<<<<< HEAD

=======
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213
if(bil%2 == 0){
    System.out.println("Bilangan Genap");
}else{
    System.out.println("Bilangan Ganjil");
}
```

    Bilangan Ganjil


##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil % 2 == 0) ? "Bilangan Genap":"Bilangan Ganjil";
System.out.println(output);
```

    Bilangan Ganjil


2. Jalankan dan amatilah hasilnya!
<<<<<<< HEAD
Bilangan Ganjil

3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!
karena  tanda ":" memiliki fungsi yang sama seperti program sebelum dimodifikasi
=======


    Bilangan Ganjil

3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

    karena  tanda ":" memiliki fungsi yang sama seperti program sebelum dimodifikasi
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213

#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
// Ketik kode program di atas di bawah sini
 int nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
```

<<<<<<< HEAD
    Masukkan sebuah bilangan: 105
=======
    Masukkan sebuah bilangan: 11
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
if(nilai >= 100){
    nilai += 10;
}else{
    nilai -= 10;
}
System.out.println("Hasil akhir nilai adalah "+nilai);
```

<<<<<<< HEAD
    Hasil akhir nilai adalah 135
=======
    Hasil akhir nilai adalah 1
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213


+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    
    fungsi kode diatas adalah nilai akan ditambah 10 jika nilai yang dimasukkan sesuai ketentuan (nilai >= 100)
    (contoh nilai yang dimasukkan 103, maka akan ditambahkan 10 yang menjadikan hasil akhirnya 113)
    
    nilai-=10;
    
    fungsi kode diatas adalah nilai akan dikurangi 10 jika nilai yang dimasukkan tidak sesuai ketentuan (nilai >= 100)
    (contoh nilai yang dimasukkan 65, maka akan dikurangi 10 yang menjadikan hasil akhirnya 55)
    
    ```
    

2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

<<<<<<< HEAD
=======
import.java.util.Scanner

public class nilai{
    
	public static void main(String[] args){

    Scanner input = new Scanner(System.in);
    int nilai1, nilai2, nilairatarata;	
    System.out.print("Masukkan nilai pertama");
    nilai1 = input.nextInt();
	System.out.print("Masukkan nilai kedua");
    nilai2 = input.nextInt();
    System.out.print(((nilai1 + nilai2)/2));
    nilairatarata = (((nilai1 + nilai2)/2));
    if(nilairatarata >= 100){
        nilairatarata -= 5;
    }else if(nilairatarata <= 100){
     System.out.print("nilairatarata");		
}
	
    }

}

Masukkan nilai pertama 100

Masukkan nilai kedua 120

110

>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213


#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
// Ketik kode program di atas di bawah sini
int umur;
System.out.print("Masukkan umur Anda: ");
umur = input.nextInt();
```

    Masukkan umur Anda: 18


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
<<<<<<< HEAD
System.out.print("Massukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Massukkan angka kedua: ");
angka2 = sc.nextDouble();
System.out.print("Massukkan operator (+ - * /): ");
operator = sc.next(). charAt(0);
```

    Massukkan angka pertama: 11
    Massukkan angka kedua: 12
    Massukkan operator (+ - * /): 13
=======
System.out.print("Masukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Masukkan angka kedua: ");
angka2 = sc.nextDouble();
System.out.print("Masukkan operator (+ - * /): ");
operator = sc.next(). charAt(0);
```

    Masukkan angka pertama: 11
    Masukkan angka kedua: 12
    Masukkan operator (+ - * /): +
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213


4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
switch(operator){
    case '+':
    hasil = angka1 + angka2;
    System.out.println(angka1 + " + " + angka2 + " + " + hasil);
    break;
    case '-':
    hasil = angka1 - angka2;
    System.out.println(angka1 + " - " + angka2 + " - " + hasil);
    break;
    case '*':
    hasil = angka1 * angka2;
    System.out.println(angka1 + " * " + angka2 + " * " + hasil);
    break;
    case '/':
    hasil = angka1 / angka2;
    System.out.println(angka1 + " / " + angka2 + " / " + hasil);
    break;
    default:
        System.out.println("Operator yang Anda masukkan salah");
}
```

<<<<<<< HEAD
    Operator yang Anda masukkan salah
=======
    23
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213


5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
<<<<<<< HEAD
 untuk memisahkan antara case agar tidak keluar bersamaan
=======
 untuk memisahkan antar case 
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!
 mengambil huruf/karakter

    ```
    operator = sc.next().chartAt(0);
    ```

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.
2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!

3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!

<<<<<<< HEAD
=======
import java.util.Scanner;

public class nilaiakhir{

	public static void main(String[] args){

	Scanner in = new Scanner(System.in);

	double uas, uts, kuis, tugas, nilaiAkhir;
	System.out.println("Masukkan Nilai");
	System.out.print("Nilai UAS : ");
	uas = in.nextDouble();
	System.out.print("Nilai UTS : ");
	uts = in.nextDouble();
	System.out.print("Nilai Kuis : ");
	kuis = in.nextDouble();
	System.out.print("Nilai Tugas : ");
	tugas = in.nextDouble();

	System.out.print("Nilai UAS: " + uas);
	System.out.print("Nilai UTS: " + uts);
	System.out.print("Nilai Kuis: " + kuis);
	System.out.print("Nilai Tugas: " + tugas);

	uas = uas * ((double) 40 / 100);
	uts = uts * ((double) 30 / 100);
	kuis = kuis * ((double) 10 / 100);
	tugas = tugas * ((double) 20 / 100);

	System.out.print("\nNilai UAS: " + uas);
	System.out.print("Nilai UTS: " + uts);
	System.out.print("Nilai Kuis: " + kuis);
	System.out.print("Nilai Tugas: " + tugas);

	nilaAkhir = uas + uts + kuis + tugas;

	System.out.print("\nNilai Akhir: " + nilaiAkhir);
	if(nilaiAkhir <= 65) {
    		System.out.println("\nRemidi");
	} else {
    		System.out.println("\nTidak Remidi");
}

    }

}


Masukkan Nilai

Nilai UAS : 80

Nilai UTS : 90

Nilai Kuis : 75

Nilai Tugas : 90

Nilai UAS: 80.0Nilai UTS: 90.0Nilai Kuis: 75.0Nilai Tugas: 90.0

Nilai UAS: 32.0Nilai UTS: 27.0Nilai Kuis: 7.5Nilai Tugas: 18.0

Nilai Akhir: 84.5

Tidak Remidi




>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213
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
<<<<<<< HEAD
=======

import java.util.Scanner;

public class Test {

    public static void main(String args[]) {
      
Scanner in = new Scanner(System.in);

int barangA, barangB, barangC;

double hargaA, hargaB, hargaC;

double total, diskon, totalBayar;

System.out.print("Masukkan harga barang A : ");

hargaA = input.nextDouble();

System.out.print("Masukkan total barang A : ");

barangA = input.nextInt();

System.out.print("Masukkan total barang B : ");

hargaB = input.nextDouble();

System.out.print("Masukkan total barang B : ");

barangB = input.nextInt();

System.out.print("Masukkan harga barang C : ");

hargaC = input.nextDouble();

System.out.print("Masukkan total barang C : ");

barangC = input.nextInt();


total = (hargaA * barangA) + (hargaB * barangB) + (hargaC * barangC);

if(total >= 1000000) {
  diskon = (double) 10/100;  
} else if(total >= 500000) {
  diskon = (double) 5/100;  
} else if(total >= 200000) {
  diskon = (double) 2/100;
} else {
    diskon = 0;
}
totalBayar = total - total * diskon;

System.out.println("Diskon Saat ini: " + diskon);
System.out.println("Struk Total");
System.out.println("Nama Barang\t\tHarga\t\tJumlah\t\tTotal");

System.out.println(String.format("Barang A\t\t%s\t%s\t\t%s",hargaA, barangA, hargaA*barangA));

System.out.println(String.format("Barang B\t\t%s\t%s\t\t%s",hargaB, barangB, hargaB*barangB));

System.out.println(String.format("Barang C\t\t%s\t%s\t\t%s",hargaC, barangC, hargaC*barangC));

System.out.println("Total\t:" + total);

System.out.println("Diskon\t:" + (total * diskon); 

System.out.println("Total\t:" + totalBayar);

in.close();

    }

}
>>>>>>> 92d0b3fe1f15e9008b2e773aa39361c49af18213
