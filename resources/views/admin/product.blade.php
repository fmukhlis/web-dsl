@extends('adminlte::page')

@section('title', 'Products | Dharma Sejahtera Lestari')

@section('content_header')
    <div class="container-fluid">
        <div class="row my-2">
            <div class="col-sm-6">
                <h1 class="m-0">Detail Products</h1>
            </div><!-- /.col -->
            <div class="col-sm-6 d-flex align-items-end">
                <ol class=" ml-auto breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('admin.products') }}">Products</a></li>
                    <li class="breadcrumb-item active">Hematology Analyzer 5 Diff</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
@stop

@section('content')
    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header border-bottom">
                            <h3 class="card-title">Product Management</h3>
                            <div class="card-tools">
                                <a href="javascript:void(0)" class="btn btn-tool btn-sm">
                                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="btn btn-tool btn-sm">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="text-center pl-3" style="width: 5%">#</th>
                                        <th style="width: 25%;">Name</th>
                                        <th style="width: 7%;">Stock</th>
                                        <th class="text-nowrap" style="width: 13%;">Cost (IDR)</th>
                                        <th class="text-nowrap" style="width: 7%;">Disc.</th>
                                        <th class="text-nowrap" style="width: 13%;">Price (IDR)</th>
                                        <th style="width: 15%;">Sales</th>
                                        <th class="text-nowrap" style="width: 15%;">Total Income (IDR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center pl-3">1</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </a>
                                        </td>
                                        <td>13</td>
                                        <td>45.000.000</td>
                                        <td>13%</td>
                                        <td>50.000.000</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                193 Sold
                                                <small class="text-success d-inline-block ml-1">
                                                    <i class="fas fa-arrow-up"></i>
                                                    12%
                                                </small>
                                            </div>
                                        </td>
                                        <td>
                                            191.401.100
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">2</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem, sit amet consectetur adipisicing
                                            </a>
                                        </td>
                                        <td>534</td>
                                        <td>2.900.000</td>
                                        <td>13%</td>
                                        <td>3.999.999</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                28 Sold
                                                <small class="text-danger d-inline-block ml-1">
                                                    <i class="fas fa-arrow-down"></i>
                                                    5%
                                                </small>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">3</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem ipsumectetur adipisicing
                                            </a>
                                        </td>
                                        <td>45</td>
                                        <td>1.800.000</td>
                                        <td>13%</td>
                                        <td>1.873.999</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                13 Sold
                                                <small class="text-success d-inline-block ml-1">
                                                    <i class="fas fa-arrow-up"></i>
                                                    22%
                                                </small>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">4</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing
                                            </a>
                                        </td>
                                        <td>7</td>
                                        <td>4.500.000</td>
                                        <td>13%</td>
                                        <td>5.167.189</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                9.120 Sold
                                                <small class="text-success d-inline-block ml-1">
                                                    <i class="fas fa-arrow-up"></i>
                                                    5%
                                                </small>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">5</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </a>
                                        </td>
                                        <td>10</td>
                                        <td>50.000.000</td>
                                        <td>13%</td>
                                        <td>50.000.000</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                193 Sold
                                                <small class="text-success d-inline-block ml-1">
                                                    <i class="fas fa-arrow-up"></i>
                                                    12%
                                                </small>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">8</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </a>
                                        </td>
                                        <td>113</td>
                                        <td>50.000.000</td>
                                        <td>13%</td>
                                        <td>50.000.000</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                193 Sold
                                                <small class="text-success d-inline-block ml-1">
                                                    <i class="fas fa-arrow-up"></i>
                                                    12%
                                                </small>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">9</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem, sit amet consectetur adipisicing
                                            </a>
                                        </td>
                                        <td>4</td>
                                        <td>3.999.999</td>
                                        <td>13%</td>
                                        <td>3.999.999</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                28 Sold
                                                <small class="text-danger d-inline-block ml-1">
                                                    <i class="fas fa-arrow-down"></i>
                                                    5%
                                                </small>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">99</td>
                                        <td>
                                            <a href="" class="truncate-1">
                                                Lorem ipsumectetur adipisicing
                                            </a>
                                        </td>
                                        <td>12</td>
                                        <td>1.873.999</td>
                                        <td>99%</td>
                                        <td>1.873.999</td>
                                        <td class="text-nowrap">
                                            <div class="d-flex">
                                                13 Sold
                                                <small class="text-success d-inline-block ml-1">
                                                    <i class="fas fa-arrow-up"></i>
                                                    22%
                                                </small>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <ul class="pagination mb-0 align-items-center">
                                <li class="mr-auto">Showing 1 to 10 of 91224 data</li>
                                <li class="page-item"><a href="#" class="page-link">«</a></li>
                                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                <li class="page-item"><a href="#" class="page-link">2</a></li>
                                <li class="page-item"><a href="#" class="page-link">3</a></li>
                                <li class="page-item"><a href="#" class="page-link">»</a></li>
                            </ul>

                        </div>
                    </div>
                    <!-- /.card -->
                </div>

                {{-- <!-- /.col-md-6 -->
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-bottom">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title">Sales</h3>
                                <a href="javascript:void(0);">View Report</a>
                            </div>
                        </div>
                        <div class="card-body pb-0 pt-2">
                            <div class="d-flex">
                                <p class="d-flex flex-column">
                                    <span class="text-bold text-lg">$18,230.00</span>
                                    <span>Sales Over Time</span>
                                </p>
                                <p class="ml-auto d-flex flex-column text-right">
                                    <span class="text-success text-lg">
                                        <i class="fas fa-arrow-up"></i> 33.1%
                                    </span>
                                    <span class="text-muted">Since last month</span>
                                </p>
                            </div>
                            <!-- /.d-flex -->
                        </div>
                    </div>
                    <!-- /.card -->

                    <!-- TABLE: LATEST ORDERS -->
                    <div class="card">
                        <div class="card-header border-bottom">
                            <h3 class="card-title">Latest Orders</h3>
                            <div class="card-tools">
                                <a href="javascript:void(0)" class="btn btn-tool btn-sm">
                                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="btn btn-tool btn-sm">
                                    <i class="fas fa-bars"></i>
                                </a>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="text-nowrap" style="width: 20%;">Order ID</th>
                                        <th class="text-nowrap" style="width: 50%;">Item</th>
                                        <th class="text-center" style="width: 20%;">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="pages/examples/invoice.html">OR98425</a></td>
                                        <td>
                                            <div class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </div>
                                        </td>
                                        <td class="text-center"><span class="badge badge-danger">Delivered</span></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pages/examples/invoice.html">OR98421</a></td>
                                        <td>
                                            <div class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </div>
                                        </td>
                                        <td class="text-center"><span class="badge badge-success">Shipped</span></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pages/examples/invoice.html">OR98422</a></td>
                                        <td>
                                            <div class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </div>
                                        </td>
                                        <td class="text-center"><span class="badge badge-info">Processing</span></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pages/examples/invoice.html">OR98424</a></td>
                                        <td>
                                            <div class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </div>
                                        </td>
                                        <td class="text-center"><span class="badge badge-warning">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><a href="pages/examples/invoice.html">OR98427</a></td>
                                        <td>
                                            <div class="truncate-1">
                                                Lorem ipsum nsectetur adipising
                                            </div>
                                        </td>
                                        <td class="text-center"><span class="badge badge-success">Shipped</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col-md-6 -->

                <div class="col-lg-8">
                    <!-- DIRECT CHAT -->
                    <div class="card direct-chat direct-chat-purple">
                        <div class="card-header">
                            <h3 class="card-title">Direct Chat</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" title="Contacts"
                                    data-widget="chat-pane-toggle">
                                    <i class="fas fa-comments"></i>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="chat-name p-2 text-center bg-light w-100 border-bottom">Fajar Mukhlis
                                Imananda
                                <small class="d-block text-muted">Last seen 12.15</small>
                            </div>
                            <!-- Conversations are loaded here -->
                            <div class="direct-chat-messages d-flex flex-column px-3">
                                <div class="mb-auto"></div>
                                <!-- Message. Default to the left -->
                                <div class="direct-chat-msg w-auto mr-auto">
                                    <div class="direct-chat-infos clearfix">
                                        <span class="direct-chat-timestamp float-right">23 Jan 2:00
                                            pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        Is this template really for free? That's unbelievable!
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->

                                <!-- Message to the right -->
                                <div class="direct-chat-msg right w-auto ml-auto">
                                    <div class="direct-chat-infos clearfix">
                                        <span class="direct-chat-timestamp float-left">23 Jan 2:05
                                            pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        You better believe it!
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->

                                <!-- Message. Default to the left -->
                                <div class="direct-chat-msg w-auto mr-auto">
                                    <div class="direct-chat-infos clearfix">
                                        <span class="direct-chat-timestamp float-right">23 Jan 2:00
                                            pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        Is this template really for free? That's unbelievable!
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->

                                <!-- Message to the right -->
                                <div class="direct-chat-msg right w-auto ml-auto">
                                    <div class="direct-chat-infos clearfix">
                                        <span class="direct-chat-timestamp float-left">23 Jan 2:05
                                            pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        You better believe it!
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->

                                <!-- Message. Default to the left -->
                                <div class="direct-chat-msg w-auto mr-auto">
                                    <div class="direct-chat-infos clearfix">
                                        <span class="direct-chat-timestamp float-right">23 Jan 2:00
                                            pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        Is this template really for free? That's unbelievable!
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->

                                <!-- Message to the right -->
                                <div class="direct-chat-msg right w-auto ml-auto">
                                    <div class="direct-chat-infos clearfix">
                                        <span class="direct-chat-timestamp float-left">23 Jan 2:05
                                            pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        You better believe it!
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->

                                <!-- Message. Default to the left -->
                                <div class="direct-chat-msg w-auto mr-auto">
                                    <div class="direct-chat-infos clearfix" <span
                                        class="direct-chat-timestamp float-right">23 Jan 5:37
                                        pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        Working with AdminLTE on a great new app! Wanna join?
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->

                                <!-- Message to the right -->
                                <div class="direct-chat-msg right w-auto ml-auto">
                                    <div class="direct-chat-infos clearfix">
                                        <span class="direct-chat-timestamp float-left">23 Jan 6:10
                                            pm</span>
                                    </div>
                                    <!-- /.direct-chat-infos -->
                                    <img class="direct-chat-img" src="{{ asset('') . 'assets/profile-picture.jpeg' }}"
                                        alt="User Avatar">
                                    <!-- /.direct-chat-img -->
                                    <div class="direct-chat-text">
                                        I would love to.
                                    </div>
                                    <!-- /.direct-chat-text -->
                                </div>
                                <!-- /.direct-chat-msg -->
                            </div>
                            <!--/.direct-chat-messages-->

                            <!-- Contacts are loaded here -->
                            <div class="direct-chat-contacts">
                                <ul class="contacts-list">
                                    <li>
                                        <a href="#" class="d-flex align-items-center">
                                            <img class="contacts-list-img"
                                                src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Avatar">

                                            <div class="contacts-list-info mx-2 flex-fill d-flex flex-column">
                                                <span class="contacts-list-name">
                                                    Count Dracula
                                                    <small class="contacts-list-date float-right">2/28/2015</small>
                                                </span>
                                                <span class="contacts-list-msg">How have you been?
                                                    I was...</span>
                                            </div>
                                            <!-- /.contacts-list-info -->
                                        </a>
                                    </li>
                                    <!-- End Contact Item -->
                                    <li>
                                        <a href="#" class="d-flex align-items-center">
                                            <img class="contacts-list-img"
                                                src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Avatar">

                                            <div class="contacts-list-info mx-2 flex-fill d-flex flex-column">
                                                <span class="contacts-list-name">
                                                    Sarah Doe
                                                    <small class="contacts-list-date float-right">2/23/2015</small>
                                                </span>
                                                <span class="contacts-list-msg">I will be waiting
                                                    for...</span>
                                            </div>
                                            <!-- /.contacts-list-info -->
                                        </a>
                                    </li>
                                    <!-- End Contact Item -->
                                </ul>
                                <!-- /.contacts-list -->
                            </div>
                            <!-- /.direct-chat-pane -->
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer px-3 border-top py-3">
                            <form action="#" method="post">
                                <div class="input-group">
                                    <input type="text" name="message" placeholder="Type Message ..."
                                        class="form-control">
                                    <span class="input-group-append">
                                        <button type="button" class="btn btn-success bg-purple border-0">Send</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-footer-->
                    </div>
                    <!--/.direct-chat -->
                </div>

                <div class="col-lg-4">
                    <!-- USERS LIST -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Latest Members</h3>

                            <div class="card-tools">
                                <span class="badge badge-danger">9999 New Members</span>
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body p-0">
                            <ul class="users-list mb-0 clearfix">
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Alexander Pierce</a>
                                    <span class="users-list-date">Today</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Norman</a>
                                    <span class="users-list-date">Yesterday</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Jane</a>
                                    <span class="users-list-date">12 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">John</a>
                                    <span class="users-list-date">12 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Alexander</a>
                                    <span class="users-list-date">13 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Sarah</a>
                                    <span class="users-list-date">14 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Nora</a>
                                    <span class="users-list-date">15 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Nadia</a>
                                    <span class="users-list-date">15 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Nadia</a>
                                    <span class="users-list-date">15 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Alexander</a>
                                    <span class="users-list-date">13 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Sarah</a>
                                    <span class="users-list-date">14 Jan</span>
                                </li>
                                <li>
                                    <img src="{{ asset('') . 'assets/profile-picture.jpeg' }}" alt="User Image">
                                    <a class="users-list-name" href="#">Nora</a>
                                    <span class="users-list-date">15 Jan</span>
                                </li>
                            </ul>
                            <!-- /.users-list -->
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer text-center">
                            <a href="javascript:">View All Users</a>
                        </div>
                        <!-- /.card-footer -->
                    </div>
                    <!--/.card -->
                </div> --}}
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
@stop

@section('footer')
    <div class="text-right">
        Copyright &#169 2022 <strong class="">PT Dharma Sejahtera Lestari</strong>. All rights reserved.
    </div>
@stop

@section('css')
    {{-- <link rel="stylesheet" href="/css/admin_custom.css"> --}}
@stop

@section('js')
    {{-- <script>
        console.log('Hi!');
    </script> --}}
@stop
