function prefix(){
    var prefix = '%luckperms_prefix%';
    prefix = prefix.replace('Смертный', 'Отсутствует');
    return prefix.replace('|','');
}
prefix();