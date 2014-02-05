<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>InvAid</title>

    <!-- Bootstrap -->
    <link href="bootstrap-3.1.0/dist/css/bootstrap.css" rel="stylesheet">
    <!-- <link rel="stylesheet" type="text/css" href="bootstrap-3.1.0/dist/css/main.css"> -->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  
<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">InvAid: Helping Manage Your Inventory</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Dashboard</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">Log Out</a></li>
      </ul>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Inventory</div>

  <!-- Table -->
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Threshold</th>
        <th>Modified By</th>
      </tr>
    </thead>
    <tbody>
      <tr class="newitem">
        <td></td>
        <td>(Add New Item)</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="lowcount">
        <td>1</td>
        <td>Blankets</td>
        <td>2</td>
        <td>10</td>
        <td>Josh Liu</td>
      </tr>
      <tr class="recentchange">
        <td>2</td>
        <td>Bandages</td>
        <td>27</td>
        <td>25</td>
        <td>Brian Lai</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Tylenol</td>
        <td>7</td>
        <td>5</td>
        <td>Ryan Chavez</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Syringes</td>
        <td>125</td>
        <td>50</td>
        <td>Ryan Chavez</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Water (0.5L x24)</td>
        <td>10</td>
        <td>8</td>
        <td>Brian Lai</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Latex Condoms/Gloves</td>
        <td>69</td>
        <td>69</td>
        <td>Saphira Sugar</td>
      </tr>
      <tr class="lowcount">
        <td>7</td>
        <td>Morphine (1 dose)</td>
        <td>4</td>
        <td>10</td>
        <td>Josh Liu</td>
      </tr>
      <tr class="lowcount">
        <td>8</td>
        <td>Scott Klemmers</td>
        <td>5</td>
        <td>10</td>
        <td>Scott Klemmer</td>
      </tr>
    </tbody>
  </table>
</div>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap-3.1.0/dist/js/bootstrap.js"></script>
  </body>
</html>