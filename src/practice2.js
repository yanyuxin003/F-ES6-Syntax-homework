const inject =(items,sections) => {
    let item ={}
    for (const key in items){
        item[key] = items[key]
    }
    sections.map(iterator =>{
        const index = iterator.index;
        const behind = item[index];
        const nowIndex = items.indexOf(behind)
        items.splice(nowIndex,0,iterator.content);
    })
    return items;
}
export { inject };
