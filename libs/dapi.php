<?php

function json($ar) {
      $str = "";
      $str .= "{";
      $id = 0;
      foreach($ar as $a=>$b) {
          $id++;
          $str .= "\"".$a."\":";
          if(!is_numeric($b)) {
              $str .= "\"".$b."\"";
          } else {
              $str .= $b;
          }
          
          if($id < count($ar)) {
              $str .= ",";
          }
      }
      $str .= "}";
      return $str;
  }
  
function noom($rz) {
      $ar = array();
      if(mysqli_num_rows($rz) > 0) {
          while($k = mysqli_fetch_assoc($rz)) {
              foreach($k as $ki=>$v) {
                  $ar[$ki] = $v;
              }
          }
      }
      return $ar;
  }


    $servername = "localhost";
    $username = "u388678206_NQZQ0";
    $password = "PLjGQbBDYn";
    $dbname = "u388678206_wB70c";
  
    $conn = new mysqli($servername, $username, $password,$dbname);
    $sql = $_POST["query"];
    
    $data = json_decode(file_get_contents('php://input'), true);

    
    if($conn->connect_error) {
        echo "DUDE what are you/!";
    } else {
        $rz = mysqli_query($conn,$data["query"]);
        echo $sql;
        $ar = noom($rz);
        header('Content-type: application/json');
        echo json($ar);
    }


    $conn->close();
?>
