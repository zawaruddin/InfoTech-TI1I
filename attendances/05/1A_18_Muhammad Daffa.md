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
System.out.print("Masukkan sebuah bilangan: ");
bil = input.nextInt();
```

    Masukkan sebuah bilangan: 15


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
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
String output = (bil% 2 == 0)? "Bilangan Genap":"Bilangan Ganjil";
System.out.println(output);

```

    Bilangan Ganjil


2. Jalankan dan amatilah hasilnya!
        Setelah dijalankan, saya memasukkan angka 15 dan hasilnya adalah bilangan ganjil
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!
        Karena saya telah menginput nilai 15 pada variabel pertama

#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit


```Java

```


```Java

```

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
// Ketik kode program di atas di bawah sini
 int nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
```

    Masukkan sebuah bilangan: 15


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
int nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
if(nilai >= 100){
nilai += 10;
}else{
    nilai -= 10;
}
System.out.println("Hasil akhir nilai adalah: "+ nilai);


```

    Masukkan sebuah bilangan: 30
    Hasil akhir nilai adalah: 20


+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10; untuk menambahkan 10 bilangan yang di imput jika nilainya lebih dari 100
    nilai-=10; untuk mengurangi 10 bilangan yang di imput jika nilainya kurang dari 100
    ```

2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.println("Masukkan umur Anda: ");
umur = input.nextInt();

```

    Masukkan umur Anda: 
    18


+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
if(umur>60)
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
        setelah rpogram saya jalnkan, saya menginput umur dengan 18 dan yang terjadi adalah keluar dewasa 

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
System.out.print("Masukkan operator(+ - * /): ");
operator = sc.next().charAt(0);
```

    Masukkan angka pertama: 20
    Masukkan angka kedua: 10
    Masukkan operator(+ - * /): +


4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
switch(operator) {
        case '+':
        hasil = angka1 + angka2;
        System.out.println(angka1 + "+" + angka2 + "=" + hasil);
        break;
        case '-':
        hasil = angka1 - angka2;
         System.out.println(angka1 + "-" + angka2 + "=" + hasil);
        break;
        case '*':
        hasil = angka1 * angka2;
        System.out.println(angka1 + "*" + angka2 + "=" + hasil);
        break;
        case '/':
        hasil = angka1 / angka2;
         System.out.println(angka1 + "/" + angka2 + "=" + hasil);
    break;
    default:
    System.out.println("Operator yang anda masukkan salah");
}

```

    20.0+10.0=30.0


5. Jalankan program. Amati apa yang terjadi!
        saya menjalankan program dengan menginput angka pertama 20 dan kedua 10 ditambahkan dan hasilnya menjadi 30

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
        break digunakan untuk menstop perintah (agar terpisah dengan case yang dibawahnya)
        default digunakan ketika tidak ada imputan yang sesuai dengan case 
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```
            digunakan untuk mencari karakter pertama dalam imput

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.
2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!

3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!

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
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.println("Masukkan umur Anda: ");
umur = input.nextInt();


```

    Masukkan umur Anda: 
    16



```Java
if(umur>=17)
    System.out.println("Boleh Berkendara");
else
    System.out.println("Tidak boleh berkendara");
```

# Nomor 3


```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.println("Masukkan nilai Anda: ");
umur = input.nextInt();

```

    Masukkan nilai Anda: 
    60



```Java
if(nilai>=65)
    System.out.println("Tidak remidi");
else
    System.out.println("Remidi");
```

# Nomor 1


```Java

int bil;
System.out.print("Masukkan sebuah bilangan: ");
bil = input.nextInt();
```


```Java
if(bil%2 == 0){
    System.out.println("Bilangan Genap");
}else{
    System.out.println("Bilangan Ganjil");
}
```


```Java

```


```Java

```


```Java

```
