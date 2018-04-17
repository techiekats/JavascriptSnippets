function maskUserId(userId) {
    var lengthToReplace = userId.length - 5;
    for (var i=0; i<=lengthToReplace ; i++){
        var character = userId[i];
        if (character != '-') {
          userId = userId.replace(character, 'x');
        }
    }
    return userId;
};
function performFundAllocation(userId, currentBalance, fundsAllocation) {
  var updatedBalance = currentBalance - fundsAllocation;
  console.log(`New balance: ${updatedBalance}`);
};
function logException(userId, message) {
    //Incorrect
   console.log(`${message} - ${userId}`);
    //Correct
    //var maskedUserId = maskUserId(userId);
    //console.log(`${message} - ${maskedUserId}`);
};
function allocateFundsForUser(userId, currentBalance, fundsAllocation) {
    try {
        if (currentBalance >= fundsAllocation) 
        {
          performFundAllocation(userId, currentBalance, fundsAllocation);
        }
        else 
        {
            throw ('Insufficient funds error')
        }
    }
    catch(err) {
        logException(userId,err );
    }
};

//valid allocation of funds
allocateFundsForUser('222-22-2222', 5000.00, 2000.00);
//invalid allocation of funds
allocateFundsForUser('222-22-2222', 2000.00, 5000.00);