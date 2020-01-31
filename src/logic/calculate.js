const calculate = (data, buttonName) => {
    const { total, next, operation } = data;

    if(buttonName === '+/-'){
        total = -total;
        next = -next;

    }
};

export default calculate;
