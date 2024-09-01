let option = prompt(['Welcome to *894#\n','1. Quick Banking\n','2. Open an account\n', '3. Loans\n','4. Firstmonie\n','5. Payattitude']);
let userPin = 12345;
let balance = 10000;

if (option === '1') {
    let quickBanking = prompt(['Welcome to *894# Banking\n','1. Transfer Money\n','2. Airtime(self)\n', '3. Airtime(other)\n','4. Enquiry services\n','5. Data\n','6. Pay bills\n']);

    if (quickBanking === '1'){
        let banking = prompt(['Transfer:\n','1. To Others\n','2. Between my FirstBank Accounts']);

        if (banking === '1'){
            let others = prompt('Enter amount:');

            if (others < 15000){

                let acctNum = prompt('Enter account number');

                if (acctNum === '1234567890'){
                    let banks = prompt(['Select recipient bank\n','1. GT Bank\n','2. FCMB\n','3. UBA\n', '4. Polaris Bank\n']); 

                    if (banks === '1') {
                        let pin = prompt('Transfer to 1234567890 at N10.75 charge.\n Please enter your 4 digit PIN:');

                        if (pin === '1234') {
                            alert('Transfer Successful!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
                    };

                    if (banks === '2') {
                        let pin = prompt('Transfer to 1234567890 at N10.75 charge.\n Please enter your 4 digit PIN:');

                        if (pin === '1234') {
                            alert('Transfer Successful!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
                    };

                    if (banks === '3') {
                        let pin = prompt('Transfer to 1234567890 at N10.75 charge.\n Please enter your 4 digit PIN:');

                        if (pin === '1234') {
                            alert('Transfer Successful!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
                    };

                    if (banks === '4') {
                        let pin = prompt('Transfer to 1234567890 at N10.75 charge.\n Please enter your 4 digit PIN:');

                        if (pin === '1234') {
                            alert('Transfer Successful!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
                    };

                } else {
                    alert('Incorrect Account number!!!');
                };
            } else {
                let amount = alert('Insufficient balance!!!');            
            };
            
        };

        if (banking === '2'){
            alert('Only one account is tied to your phone number');
        };
        
    };

    if (quickBanking === '2'){
        let amount = prompt(['Enter amount:']);

        if (amount < 5000) {

            let pin = prompt('Recharge to 09023456789 \n Please enter your 4 digit pin');

                    if (pin === '1234') {
                            alert('Recharge Successfully!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
        } else {
                alert('Insufficient balance!!!');            
          };
    };

    if (quickBanking === '3'){
        let amount = prompt(['Enter amount:']);

        if (amount < 5000) {

            let number = prompt('Enter mobile number');

                if (number === '1234567890') {
                    let pin = prompt('Recharge to 1234567890 \n Please enter your 4 digit PIN');

                    if (pin === '1234') {
                        alert('Recharge Successfully!!!')
                    } else  {
                        alert('Incorrect PIN!!!')
                    };
                }

        } else {
                alert('Insufficient balance!!!');            
          };
    };

    if (quickBanking === '4'){
        let enquiry = prompt(['Welcome to *894#','\nSelect a service','1. Balance Enquiry\n','2. BVN Enquiry','3. Account Number Enquiry','4. Mini Statement']);

        if (enquiry === '1') {
            alert('An SMS message has been sent to you.');
        };

        if (enquiry === '2') {
            alert('An SMS message has been sent to you.');
        };

        if (enquiry === '3') {
            alert('An SMS message has been sent to you.');
        };

        if (enquiry === '1') {
            alert('An SMS message has been sent to you.');
        };
    };

    if (quickBanking === '5'){
        let Data = prompt(['1. Self\n','2. Third party']);

        if (Data === '1') {
            let choice = prompt(['1. 3GB 30Days N1500\n','2. 18GB 30Days N5000\n','3. 200MB 3Days N200\n','4. 40GB 30Days N10000\n','5. 2GB 1Day N500\n','6. 100MB 1Day N100']);

            if (choice === '1') {
                let pin = prompt('Recharge of 3GB 30Days N1500\n Please enter your 4 digit pin:');

                    if (pin === '1234') {
                            alert('Recharge Successfully!!!')
                    } else  {
                            alert('Incorrect PIN!!!')
                        };
            }

            if (choice === '2') {
                let pin = prompt('Recharge of 18GB 30Days N5000\n Please enter your 4 digit pin:');

                    if (pin === '1234') {
                            alert('Recharge Successfully!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
            }

            if (choice === '3') {
                let pin = prompt('Recharge of 200MB 3Days N200\n Please enter your 4 digit pin:');

                    if (pin === '1234') {
                            alert('Recharge Successfully!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
            }

            if (choice === '4') {
                let pin = prompt('Recharge of 40GB 30Days N10000\n Please enter your 4 digit pin:');

                    if (pin === '1234') {
                            alert('Recharge Successfully!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
            }

            if (choice === '5') {
                let pin = prompt('Recharge of 2GB 1Day N500\n Please enter your 4 digit pin:');

                    if (pin === '1234') {
                            alert('Recharge Successfully!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
            }

            if (choice === '6') {
                let pin = prompt('Recharge of 100MB 1Day N100\n Please enter your 4 digit pin:');

                    if (pin === '1234') {
                            alert('Recharge Successfully!!!')
                        } else  {
                            alert('Incorrect PIN!!!')
                        };
            }

        }

        if (Data === '2') {

            let number = prompt('Enter mobile number')

            if (number === '1234567890'){

                let choice = prompt(['1. 3GB 30Days N1500\n','2. 18GB 30Days N5000\n','3. 200MB 3Days N200\n','4. 40GB 30Days N10000\n','5. 2GB 1Day N500\n','6. 100MB 1Day N100']);

                if (choice === '1') {
                    let pin = prompt('Recharge of 3GB 30Days N1500\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                        } else  {
                                alert('Incorrect PIN!!!')
                            };
                }

                if (choice === '2') {
                    let pin = prompt('Recharge of 18GB 30Days N5000\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                            } else  {
                                alert('Incorrect PIN!!!')
                            };
                }

                if (choice === '3') {
                    let pin = prompt('Recharge of 200MB 3Days N200\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                            } else  {
                                alert('Incorrect PIN!!!')
                            };
                }

                if (choice === '4') {
                    let pin = prompt('Recharge of 40GB 30Days N10000\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                            } else  {
                                alert('Incorrect PIN!!!')
                            };
                }

                if (choice === '5') {
                    let pin = prompt('Recharge of 2GB 1Day N500\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                            } else  {
                                alert('Incorrect PIN!!!')
                            };
                }

                if (choice === '6') {
                    let pin = prompt('Recharge of 100MB 1Day N100\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                            } else  {
                                alert('Incorrect PIN!!!')
                            };
                }

            } else{
                alert('Incorrect mobile number')
            };

        }


    };

    if (quickBanking === '6'){

        let bills = prompt(['1. Cable TV\n','2. Electricity\n','3. Betting and Lottery\n','4. Renewable energy']);

        if (bills === '1'){
            let amount = prompt('Enter amount:');

            if (amount <= 10000){
                let pin = prompt('Recharge Cable TV\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                        } else  {
                                alert('Incorrect PIN!!!')
                            };
            } else {
                alert('Insufficient Balance!!!')
            }
        };

        if (bills === '2'){
            let amount = prompt('Enter amount:');

            if (amount <= 10000){
                let pin = prompt('Recharge Electricity\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                        } else  {
                                alert('Incorrect PIN!!!')
                            };
            } else {
                alert('Insufficient Balance!!!')
            }
        };

        if (bills === '3'){
            let amount = prompt('Enter amount:');

            if (amount <= 10000){
                let pin = prompt('Fund Betting and Lottery App\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Funded Successfully!!!')
                        } else  {
                                alert('Incorrect PIN!!!')
                            };
            } else {
                alert('Insufficient Balance!!!')
            }
        };
        
        if (bills === '4'){
            let amount = prompt('Enter amount:');

            if (amount <= 10000){
                let pin = prompt('Recharge Renewable energy\n Please enter your 4 digit pin:');

                        if (pin === '1234') {
                                alert('Recharge Successfully!!!')
                        } else  {
                                alert('Incorrect PIN!!!')
                            };
            } else {
                alert('Insufficient Balance!!!')
            }
        };

    }
          
};


if (option === '2') {
    let account = alert(['Welcome to *894# Banking\n','You already have Firstbank Account']);
};


if (option === '3') {
    let loans = prompt(['Select Option\n','1. FirstCredit\n','2. FirstAdvance\n', '3. Airtime/Data Loan\n']);

    if (loans === '1') {
        alert('You are not eligible for this service. Try again later')
    };
    if (loans === '2') {
        alert('You are not eligible for this service. Try again later')
    };
    if (loans === '3') {
        alert('You are not eligible for this service. Try again later')
    };
};


if (option === '4') {
    let firstMonie = prompt('1. Link Account to FirstMonie wallet');

    if (firstMonie === '1') {
        let link = prompt(['Select Account\n','1. 30xxxxxxxx54']);

        if (link === '1') {
            alert('Wallet has been linked successfully')
        }
    };
};


if (option === '5') {
    let payAttitude = alert('Service unavailable. Please, try again later')
};

