type _userInfoRowType = {
    first_name:string,
    last_name:string,
    address:string
}



export type SQLrowUserInfo = {
    _array: [_userInfoRowType];
        /** The lengh of the dataset */
        length: number;
        /** A convenience function to acess the index based the row object
         * @param idx the row index
         * @returns the row structure identified by column names
         */
        item: (idx: number) => any;
}