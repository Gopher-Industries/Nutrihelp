
import os
import random
import shutil
from shutil import copy2
import os.path as osp

def data_set_split(src_data_folder, target_data_folder, train_scale=0.6, val_scale=0.2, test_scale=0.2):
    print("start")
    class_names = os.listdir(src_data_folder)
    # Create a folder in the target directory
    split_names = ['train', 'val', 'test']
    for split_name in split_names:
        split_path = os.path.join(target_data_folder, split_name)
        if os.path.isdir(split_path):
            pass
        else:
            os.mkdir(split_path)
        # create a category folder under the split_path directory
        for class_name in class_names:
            class_split_path = os.path.join(split_path, class_name)
            if os.path.isdir(class_split_path):
                pass
            else:
                os.mkdir(class_split_path)


    for class_name in class_names:
        current_class_data_path = os.path.join(src_data_folder, class_name)
        current_all_data = os.listdir(current_class_data_path)
        current_data_length = len(current_all_data)
        current_data_index_list = list(range(current_data_length))
        random.shuffle(current_data_index_list)

        train_folder = os.path.join(os.path.join(target_data_folder, 'train'), class_name)
        val_folder = os.path.join(os.path.join(target_data_folder, 'val'), class_name)
        test_folder = os.path.join(os.path.join(target_data_folder, 'test'), class_name)
        train_stop_flag = current_data_length * train_scale
        val_stop_flag = current_data_length * (train_scale + val_scale)
        current_idx = 0
        train_num = 0
        val_num = 0
        test_num = 0
        for i in current_data_index_list:
            src_img_path = os.path.join(current_class_data_path, current_all_data[i])
            if current_idx <= train_stop_flag:
                copy2(src_img_path, train_folder)

                train_num = train_num + 1
            elif (current_idx > train_stop_flag) and (current_idx <= val_stop_flag):
                copy2(src_img_path, val_folder)

                val_num = val_num + 1
            else:
                copy2(src_img_path, test_folder)

                test_num = test_num + 1

            current_idx = current_idx + 1

        print("*********************************{}*************************************".format(class_name))
        print(
            "The {} class is divided according to the ratio of {} : {} : {}, with a total of {} images".format(class_name, train_scale, val_scale, test_scale,
                                                                 current_data_length))
        print("Training set {} : {} ".format(train_folder, train_num))
        print("Validation set{}：{}".format(val_folder, val_num))
        print("Test set{}：{}".format(test_folder, test_num))



if __name__ == '__main__':
    src_data_folder = "..\Crawler_cleaned"
    target_data_folder = src_data_folder + "_" + "split"
    if osp.isdir(target_data_folder):
        print("target folder already exists and is being deleted...")
        shutil.rmtree(target_data_folder)
    os.mkdir(target_data_folder)
    print("Target folder Created successfully")

    data_set_split(src_data_folder, target_data_folder)
    print("*****************************************************************")
    print("Data set partition is complete, please view in the {} directory".format(target_data_folder))

