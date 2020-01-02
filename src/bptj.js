<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dashboard | Monitoring Berkas - BPTJ</title>

    <style type="text/css">
      .btn_style { 
      border: 1px solid #cecece;
      border-radius: 3px;
      padding: 3px 10px;
      box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
      color: white; }

      .btn_orange { 
       background-color: #ffa500;
     }

     .btn_style:hover{ 
     border: 1px solid #b1b1b1;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); 
    } 
    </style>

    <link rel="shortcut icon" href="assets/img/favicon.png">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <!-- Dashboard Style -->
    <link rel="stylesheet" href="assets/css/jasny-bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/navmenu-reveal.css">
    <!-- End Dashboard Style -->

    <!-- Style Calendar -->
    <link href='assets/css/fullcalendar.css' rel='stylesheet' />
    <link href='assets/css/fullcalendar.print.css' rel='stylesheet' media='print' />
    <!-- Ennd Style Calendar -->

    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/responsive-style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css">


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/main-script.js"></script>
    <!-- Dashboard script-->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jasny-bootstrap.min.js"></script>
    <!-- End Dashboard script-->
  </head>
<body className="bg-grey col-dark">
  <div className="navmenu navmenu-default navmenu-fixed-left">
      <div className="slide-menu">
        <span className="navmenu-brand">DASHBOARD MENU</span>
        <div className="navbar navbar-default slide-button">
          <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-recalc="false" data-target=".navmenu" data-canvas=".canvas">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
      <ul className="nav navmenu-nav">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/dash-1.png" className="img-responsive inline-block">Perizinan Online <i className="fa fa-chevron-right col-white" aria-hidden="true"></i></a>
          <ul className="dropdown-menu navmenu-nav">
            <li><a href="../dashboard-izin-angkutan/izin-perkotaan.html">Perkotaan</a></li>
            <li><a href="../dashboard-izin-angkutan/izin-pemukiman.html">Pemukiman</a></li>
          </ul>
        </li>
        <li className="dropdown active">
          <a href="../UTS-ppaw-B-kelompok-2/monitoring-berkas-pemukiman.html" className="dropdown-toggle"><img src="assets/img/dash-2.png" className="img-responsive inline-block">Monitoring Berkas</a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle"><img src="assets/img/dash-3.png" className="img-responsive inline-block">Cara Penggunaan</a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle"><img src="assets/img/dash-4.png" className="img-responsive inline-block">Call Center</a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle"><img src="assets/img/dash-5.png" className="img-responsive inline-block">Regulasi / Ketentuan</a>
        </li>
      </ul>
    </div>

    <div className="canvas">
      <div className="container-fluid header">
        <div className="dash-header">
          <div className="navbar navbar-default navbar-fixed-top">
            <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-recalc="false" data-target=".navmenu" data-canvas=".canvas">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <img src="assets/img/logo-dashboard.png" alt="" className="img-responsive inline-block logo-dashboard">
          <div className="notification">
            <ul className="notify">
              <li>
                <a href="#"><i className="fa fa-phone" aria-hidden="true"></i> <span className="text">Hubungi</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-info-circle" aria-hidden="true"></i> <span className="text">Tentang</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-question-circle" aria-hidden="true"></i> <span className="text">Bantuan</span></a>
              </li>
            </ul>
            <div className="logout">
              <a href="../index.html"><i className="fa fa-sign-out" aria-hidden="true"></i> <span className="text">LOGOUT</span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Breadcrumb Dashboard -->
      <div className="breadcrumb dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="info-dashboard">
                <h1 className="name-title col-white bread">Monitoring Berkas</h1>
                <div className="breadcrumb-info">
                  <i className="fa fa-home" aria-hidden="true"></i> <a href="../Project_PPAW_Kel2_DashboardUser/index.html">Home</a> <span className="divider">/</span> <a href="#" className="active">Monitoring Berkas</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="search-dashboard">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="#"></i></button>
                  </span>
                  <input type="text" className="form-control" placeholder="Search people, documents, dates...">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Breadcrumb Dashboard -->

      <div className="container-fluid top-info dash-input accordion-type">
        <div className="top-info-dashboard">
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div className="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Monitoring Berkas Permohonan Izin Baru Pemukiman <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                  <div className="top-search-body">
                    <div className="row">
                      <div className="col-xs-12 col-md-6 col-sm-6">
                        <div className="entries">
                          <span>Show</span>
                          <select className="show-entries" name="">
                            <option value="10">10</option>
                            <option value="10">20</option>
                            <option value="10">30</option>
                          </select>
                          <span>entries</span>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6 col-sm-6">
                        <div className="search-col">
                          <span>Search:</span>
                          <input type="text" name="search" value="" placeholder="" className="input">
                          <i className="fa fa-chevron-up" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br>
                  <td>Surat Persetujuan Permohonan Izin Baru</td><br>
                    <br><button className="btn_style btn_orange">Upload PDF</button>
                   <br><br>
                  <div className="section one">
                    <div className="form-table table table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox">
                            </th>
                            <th className="text-left">Berkas Izin Permohonan <span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></th> 
                            <th className="text-left">Tanggal<span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></th>
                            <th className="text-left">Status <span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></th>
                            <th className="text-left">Action <span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Surat Permohonan </td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-check-circle" aria-hidden="true"></i></td>
                            <td>
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Surat Kesanggupan </td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-check-circle" aria-hidden="true"></i></td>
                            <td>
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Surat Pol/Bengkel</td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                            <td className="non-active">
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Rekomendasi Dinas Perhubungan Asal Perjalanan(*)</td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                            <td className="non-active">
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Rekomendasi Dinas Perhubungan Tujuan Perjalanan(*)</td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                            <td className="non-active">
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Surat Perjanjian kerjasama dengan pengelola Bandara </td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                            <td className="non-active">
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">STNK</td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                            <td className="non-active">
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Buku Uji/SRUT untuk kendaraan baru</td>
                            <td>24/11/2015</td>
                            <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                            <td className="non-active">
                              <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i></a>
                              <a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                          </tr>
                          
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>
                              <input type="checkbox">
                            </td>
                            <td className="text-left">Nama Pemohon <span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></td>
                            <td className="text-left">Tanggal <span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></td>
                            <td className="text-left">Status <span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></td>
                            <td className="text-left">Action <span className="glyphicon glyphicon-sort float-right" aria-hidden="true"></span></th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting">
                    <div className="footer-list-table">
                      <div className="row">
                        <div className="col-md-6 col-xs-12">
                          <span className="show-en">Showing</span><span className="count1">1</span> <span>to</span> <span className="count1">10</span> <span className="end">entries</span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                          <nav aria-label="Page navigation">
                            <ul className="pagination">
                              <li>
                                <a href="#" aria-label="Previous">Previous</a>
                              </li>
                              <li><a href="#" className="active">1</a></li>
                              
                              <li>
                                <a href="#" aria-label="Next">Next</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
              
            

      <!-- Footer Dashboard -->
      <div className="copywriting">
        <div className="container-fluid">
          <p>Hak Cipta &copy; 2018 . <strong>Badan Pengelola Transportasi JABODETABEK</strong>  | All Rights Reserved.</p>
        </div>
      </div>
      <!-- End Footer Dashboard -->

    </div>
  </body>
</html>

<script>
</script>
