window.addEventListener("load" , function (){

    $("input").on("keydown", function(e) {
        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
            return false;
        }
    });



    $(".cart_edit"  ).on("click", function(){ cart_edit(this);   });
    $(".cart_delete").on("click", function(){ cart_delete(this); });

});
function cart_edit(elem){
    //カート内数量変更処理

    let form_elem   = $(elem).parent("form");
    let data        = new FormData( $(form_elem).get(0) );
    let url         = $(form_elem).prop("action");
    
    for (let v of data ){ console.log(v); }
    console.log(data);

    $.ajax({
        url: url,
        type: "PUT",
        data: {"test":"test"},
        /*
        data: data,
        processData: false,
        contentType: false,
        */
        dataType: 'json'
    }).done( function(data, status, xhr ) { 
        console.log("EDITED");
        console.log(data);
    }).fail( function(xhr, status, error) {
        console.log("FAILED");
    }); 

}

function cart_delete(elem){
    //カート削除処理

    let form_elem   = $(elem).parent("form");
    let url         = $(form_elem).prop("action");
    
    $.ajax({
        url: url,
        type: "DELETE",
        dataType: 'json'
    }).done( function(data, status, xhr ) { 
        console.log("DELETED");
        console.log(data);
    }).fail( function(xhr, status, error) {
    }); 
    


}

