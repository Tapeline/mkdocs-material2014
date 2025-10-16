$(document).ready(function () {
    initMaterializeCssComponents();
    initSearch();
    if (!$(".d-cool-page-start").length) {
        $('.navbar-fixed').removeClass("d-seamless-cool-page-navbar");
    }
    $(".d-toc-wrapper").pushpin({
        top: 320,
        offset: 64
    });
    initGlossary();
    initAbbr();
    $(".d-secondary-collapsible").each((i, obj) => {
        const header = $(obj).children(".d-secondary-collapsible-header");
        $(header).click(() => {
            $(obj).toggleClass("d-active");
        });
    });
});

$(document).scroll(function () {
    if (!use_cool_start) return;
    $('.navbar-fixed').removeClass("no-transition");
    if ($(document).scrollTop() >= 180 && $(".d-cool-page-start").length) {
        $('.navbar-fixed').removeClass("d-no-text-cool-page-navbar");
    } else {
        $('.navbar-fixed').addClass("d-no-text-cool-page-navbar");
    }
    if ($(document).scrollTop() >= 240 && $(".d-cool-page-start").length) {
        $('.navbar-fixed').removeClass("d-seamless-cool-page-navbar");
    } else {
        $('.navbar-fixed').addClass("d-seamless-cool-page-navbar");
    }
});

function initSearch() {
    $(".d-search-button").click(e => {
        e.preventDefault();
        $("body").addClass("d-search-open");
    });
    $(".d-search-close-button").click(e => {
        e.preventDefault();
        $("body").removeClass("d-search-open");
    });
}

function initMaterializeCssComponents() {
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.collapsible.expandable').collapsible({
        accordion: false
    });
    $('h1,h2,h3,.scollspy').scrollSpy();
    $('.tabs').tabs({
        swipeable: false,
        duration: 150
    });
    $('.tooltipped').tooltip();
}

function initGlossary() {
    // $('.mkdocs-ezglossary-link').addClass("tooltipped");
    // $('.mkdocs-ezglossary-link').each((i, obj) => {
    //     obj = $(obj);
    //     obj.attr("data-tooltip", obj.attr("title"));
    //     obj.attr("title", null);
    // });
    const glossaryModal = M.Modal.getInstance(
        document.getElementById("ezglossary-modal")
    );
    $("#ezglossary-modal-link").click((event) => {
        glossaryModal.close();
    });
    $(".mkdocs-ezglossary-link").each((i, obj) => {
        obj = $(obj);
        obj.click((event) => {
            event.preventDefault();
            $("#ezglossary-modal-header").text(obj.text());
            $("#ezglossary-modal-content").html(`<p>${obj.attr("title")}</p>`);
            $("#ezglossary-modal-link").attr("href", obj.attr("href"));
            glossaryModal.open();
        });
    });
}

function initAbbr() {
    const abbrModal = M.Modal.getInstance(
        document.getElementById("abbr-modal")
    );
    $("abbr").each((i, obj) => {
        obj = $(obj);
        obj.click((event) => {
            $("#abbr-modal-header").text(obj.text());
            $("#abbr-modal-content").html(`<p>${obj.attr("title")}</p>`);
            abbrModal.open();
        });
    });
}