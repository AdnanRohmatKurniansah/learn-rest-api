<?php 

    // $mahasiswa = [
    //     [
    //         "nama" => "adnan rohmat kurniansah",
    //         "nrp" => "089787867556",
    //         "email" => "atnandimas@gmail.com"
    //     ],
    //     [
    //         "nama" => "kurniansah",
    //         "nrp" => "089787867556",
    //         "email" => "atnand@gmail.com"
    //     ]
    // ];

    $dbh = new PDO('mysql:host=localhost;dbname=jasa_kirim', 'root', '');

    $db = $dbh->prepare('SELECT * FROM pengirim');
    $db->execute();
    $pengirim = $db->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($pengirim);
    echo $data;

?>