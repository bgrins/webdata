<?
    if ($db = new SQLiteDatabase('temp/db')) {
        $db->queryExec("DROP table requests");
        $q = @$db->query('SELECT har FROM requests WHERE id = 1');
        if ($q === false) {
            $db->queryExec('CREATE TABLE requests (id int, har text, created datetime default current_timestamp, PRIMARY KEY (id)); INSERT INTO requests VALUES (1, "", null)');
            $har = "yo";
        } else {
            $result = $q->fetchSingle();
            $har = "howdy";
        }
        $db->queryExec("UPDATE requests SET har = '$har' WHERE id = 1");
    } else {
        die($err);
    }
?>